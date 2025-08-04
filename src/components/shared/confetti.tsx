"use client";

import { getJsConfetti } from "@/lib/utils";
import { useEffect } from "react";

const Confetti = () => {
  useEffect(() => {
    const jsConfetti = getJsConfetti();

    if (jsConfetti) {
      jsConfetti.addConfetti({
        emojis: ["🥟", "🥮", "🍑", "🍚"],
        emojiSize: 100,
        confettiNumber: 200,
        confettiColors: [
          "#ff0a54",
          "#ff477e",
          "#ff7096",
          "#ff85a1",
          "#fbb1bd",
          "#f9bec7",
        ],
      });
    }
  }, []);

  return null;
};

export default Confetti;
