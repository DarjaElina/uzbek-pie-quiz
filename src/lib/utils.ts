import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import JSConfetti from "js-confetti";

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
