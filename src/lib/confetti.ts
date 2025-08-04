import JSConfetti from "js-confetti";

let jsConfettiInstance: JSConfetti | null = null;

export function getJsConfetti() {
  if (!jsConfettiInstance) {
    jsConfettiInstance = new JSConfetti();
  }
  return jsConfettiInstance;
}
