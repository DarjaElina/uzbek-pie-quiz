import QuestionCard from "@/components/shared/questions";
import { getLocalizedQuestions, getLocalizedResults } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
};

export default async function QuizPage() {
  const questions = await getLocalizedQuestions();
  const results = await getLocalizedResults();
  return <QuestionCard questions={questions} results={results} />;
}
