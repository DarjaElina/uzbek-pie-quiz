import QuestionCard from "@/components/shared/questions";
import { getLocalizedQuestions, getLocalizedResults } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("quiz"),
  };
}
export default async function QuizPage() {
  const questions = await getLocalizedQuestions();
  const results = await getLocalizedResults();
  return <QuestionCard questions={questions} results={results} />;
}
