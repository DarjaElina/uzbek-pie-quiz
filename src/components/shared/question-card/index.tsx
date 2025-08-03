import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ProgressBar from "./progress-bar";

const questions = [
  {
    id: 1,
    question: "some question",
    answerOptions: [
      {
        id: 1,
        answer: "some answer",
        imageUrl: "/images/samsa.avif",
        imageAlt: "some alt",
      },
      {
        id: 2,
        answer: "some answer",
        imageUrl: "/images/samsa.avif",
        imageAlt: "some alt",
      },
      {
        id: 3,
        answer: "some answer",
        imageUrl: "/images/samsa.avif",
        imageAlt: "some alt",
      },
      {
        id: 4,
        answer: "some answer",
        imageUrl: "/images/samsa.avif",
        imageAlt: "some alt",
      },
    ],
  },
];

interface CardContent {
  question: string;
  imagesUrl: string[];
}

const QuestionCard = () => {
  return (
    <div className="max-w-3xl ">
      {questions.map((q) => (
        <Card key={q.id}>
          <CardHeader>
            <ProgressBar />
            <CardTitle> {q.question}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {q.answerOptions.map((o) => (
                <div key={o.id}>
                  <Image
                    src={o.imageUrl}
                    width={100}
                    height={100}
                    alt={o.imageAlt}
                    className="w-full rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all"
                  />
                  {o.answer}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default QuestionCard;
