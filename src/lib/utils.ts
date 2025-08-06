import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import JSConfetti from "js-confetti";
import { PieType } from "@/generated/prisma";
import { results } from "./constants/results";
import { questions } from "./constants/questions";
import { getTranslations } from "next-intl/server";

let jsConfettiInstance: JSConfetti | null = null;

export function getJsConfetti() {
  if (!jsConfettiInstance) {
    jsConfettiInstance = new JSConfetti();
  }
  return jsConfettiInstance;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getMetaDataByType(type: PieType, locale: string) {
  const result = results.find((r) => r.type === type);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  if (!result) {
    return {
      title: t("title"),
      description: t("description"),
    };
  }

  const { nameKey, personalityKey } = result;

  return {
    title: t("iAmUzbekPie", { result: t(nameKey) }),
    description: t("iAm", { result: t(personalityKey) }),
  };
}

export async function getLocalizedQuestions() {
  const t = await getTranslations("Quiz");

  return questions.map((q) => ({
    ...q,
    question: t(q.questionKey),
    answerOptions: q.answerOptions.map((a) => ({
      ...a,
      answer: t(a.answerKey),
    })),
  }));
}

export async function getLocalizedResults() {
  const t = await getTranslations("ResultPage");

  return results.map((r) => ({
    ...r,
    name: t(r.nameKey),
    personality: t(r.personalityKey),
    description: t(r.descriptionKey),
  }));
}
