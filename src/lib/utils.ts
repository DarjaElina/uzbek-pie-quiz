import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import JSConfetti from "js-confetti";
import { PieType } from "@/types/pie.types";
import { results } from "./questions";
import { APP_DESCRIPTION, APP_NAME } from "./constants";

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

export function getMetaDataByType(type: PieType) {
  const result = results.find((r) => r.type === type);

  if (!result) {
    return {
      title: APP_NAME,
      description: APP_DESCRIPTION,
    };
  }

  const { name, description } = result;

  return {
    title: `${name} 🥟 | Uzbek Pie Personality Result`,
    description,
  };
}
