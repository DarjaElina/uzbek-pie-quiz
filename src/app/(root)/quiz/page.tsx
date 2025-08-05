import QuestionCard from "@/components/shared/question-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
};

export default function QuizPage() {
  return <QuestionCard />;
}
