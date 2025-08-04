"use client";

import {
  Card,
  CardContent as UICardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ProgressBar from "./progress-bar";
import { cn } from "@/lib/utils";
import { startTransition, useActionState, useState } from "react";
import { PieType } from "@/types/pie.types";
import { AnswerOption, PieResult } from "@/types/quiz.types";
import { questions, results } from "@/db/questions";
import ResultCard from "../result-card";
import Confetti from "../confetti";
import { createStatisticRecord } from "@/lib/actions/statistic.actions";

const QuestionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resArray, setResArray] = useState<PieType[]>([]);
  const [res, setRes] = useState<PieResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [data, action] = useActionState(createStatisticRecord, {
    success: false,
    message: "",
  });

  const getMostFrequent = (arr: PieType[]): PieType => {
    const countMap = arr.reduce<Record<string, number>>((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(countMap).reduce((a, b) =>
      a[1] > b[1] ? a : b,
    )[0] as PieType;
  };

  const handleClick = async (answerOption: AnswerOption, index: number) => {
    const newAnswers = [...resArray, answerOption.pieType];
    setResArray(newAnswers);
    setCurrentIndex(index + 1);

    if (index === 9) {
      setIsCalculating(true);
      setShowResult(false);

      setTimeout(() => {
        setIsCalculating(false);
        setShowResult(true);
      }, 2000);

      const resType = getMostFrequent(newAnswers);
      startTransition(() => {
        action({
          type: resType,
        });
      });
      const finalResult = results.find((r) => r.type === resType) || null;
      setRes(finalResult);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full space-y-6">
      {currentIndex < 10 && (
        <>
          {questions.map((question, questionIndex) => (
            <Card
              className={cn(questionIndex !== currentIndex && "hidden")}
              key={question.id}
            >
              <CardHeader>
                <ProgressBar currentStep={currentIndex + 1} />
                <CardTitle className="text-2xl sm:text-xl">
                  {question.question}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Choose the one that feels most <em>you</em>
                </CardDescription>
              </CardHeader>

              <UICardContent>
                <div className="grid grid-cols-2 gap-4">
                  {question.answerOptions.map((answerOption) => (
                    <div
                      key={answerOption.id}
                      onClick={() => handleClick(answerOption, questionIndex)}
                      className="cursor-pointer group text-center space-y-2 p-2 transition-all"
                    >
                      <Image
                        priority
                        src={answerOption.imageUrl}
                        width={200}
                        height={200}
                        alt={answerOption.imageAlt}
                        className="w-full rounded-xl shadow-md group-hover:scale-105 group-hover:brightness-105 transition-transform"
                      />
                      <p className="text-lg">{answerOption.answer}</p>
                    </div>
                  ))}
                </div>
              </UICardContent>
            </Card>
          ))}
        </>
      )}

      {isCalculating && (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center text-2xl font-medium gap-4">
          <span className="animate-spin text-3xl">🥟</span>
          <p>Calculating your Uzbek pie personality…</p>
        </div>
      )}
      {showResult && (
        <>
          <Confetti />
          <ResultCard res={res} />
        </>
      )}
    </div>
  );
};

export default QuestionCard;
