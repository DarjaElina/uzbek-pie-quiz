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
import { cn } from "@/lib/utils";
import { useState } from "react";

type PieType = 'classic' | 'pumpkin' | 'cheese' | 'potato' |'lamb';

interface AnswerOption {
  id: number;
  answer: string;
  pieType: PieType;
  imageUrl: string;
  imageAlt: string;
}

interface Question {
  id: number;
  question: string;
  answerOptions: AnswerOption[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What kind of bazaar do you love the most?",
    answerOptions: [
      {
        id: 1,
        answer: "🧺 Spices & smells everywhere",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Spice bazaar scene",
      },
      {
        id: 2,
        answer: "🧵 Handicrafts & embroidery",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Handmade crafts and threads",
      },
      {
        id: 3,
        answer: "🍉 Fruits and warm bread",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Bread and fruit in a market",
      },
      {
        id: 4,
        answer: "👘 Silks, ceramics & old books",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Colorful silk and pottery",
      },
    ],
  },
  {
    id: 2,
    question: "Your ideal morning ritual?",
    answerOptions: [
      {
        id: 1,
        answer: "🫖 Brewing tea slowly",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "A steaming teapot",
      },
      {
        id: 2,
        answer: "🥚 Making breakfast for loved ones",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Warm breakfast on a table",
      },
      {
        id: 3,
        answer: "🪷 Quiet journaling or sketching",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Notebook and pen by a window",
      },
      {
        id: 4,
        answer: "🕺 Dancing while cleaning",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Person dancing with a mop",
      },
    ],
  },
  {
    id: 3,
    question: "Pick a spice that calls your soul:",
    answerOptions: [
      {
        id: 1,
        answer: "🌶️ Chili (bold & hot)",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Chili peppers",
      },
      {
        id: 2,
        answer: "🌿 Cumin (earthy & deep)",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Cumin seeds",
      },
      {
        id: 3,
        answer: "🍯 Cinnamon (sweet & warm)",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Cinnamon sticks",
      },
      {
        id: 4,
        answer: "🧄 Garlic (strong & honest)",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Garlic cloves",
      },
    ],
  },
  {
    id: 4,
    question: "Choose a traditional Uzbek pattern:",
    answerOptions: [
      {
        id: 1,
        answer: "🧵 Suzani flowers",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Suzani flower embroidery",
      },
      {
        id: 2,
        answer: "🌀 Ikat waves",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Ikat textile pattern",
      },
      {
        id: 3,
        answer: "🟰 Geometric tiles",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Tiled wall with patterns",
      },
      {
        id: 4,
        answer: "✨ Gold-thread embroidery",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Gold embroidery detail",
      },
    ],
  },
  {
    id: 5,
    question: "How do you react when something goes wrong?",
    answerOptions: [
      {
        id: 1,
        answer: "😌 Breathe and find the calm",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Person meditating calmly",
      },
      {
        id: 2,
        answer: "😅 Make a joke and roll with it",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Laughing with friends",
      },
      {
        id: 3,
        answer: "😠 Express it, loud and proud",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Frustrated expression",
      },
      {
        id: 4,
        answer: "😶 Hide feelings, help others instead",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Helping hand gesture",
      },
    ],
  },
  {
    id: 6,
    question: "Pick a comfort food on a cold day:",
    answerOptions: [
      {
        id: 1,
        answer: "🥘 Lagman",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Hot bowl of lagman",
      },
      {
        id: 2,
        answer: "🫓 Fresh non with butter",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Bread with melting butter",
      },
      {
        id: 3,
        answer: "🥟 Samsa, obviously",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Warm samsa pastry",
      },
      {
        id: 4,
        answer: "🍲 Pumpkin soup with herbs",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Pumpkin soup bowl",
      },
    ],
  },
  {
    id: 7,
    question: "Choose your tea mood:",
    answerOptions: [
      {
        id: 1,
        answer: "🍵 Green tea with mint",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Mint tea in glass",
      },
      {
        id: 2,
        answer: "🫖 Black tea, no sugar",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Black tea being poured",
      },
      {
        id: 3,
        answer: "🍋 Lemon & ginger",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Lemon ginger tea",
      },
      {
        id: 4,
        answer: "🍇 Dried fruit infusion",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Fruit tea with berries",
      },
    ],
  },
  {
    id: 8,
    question: "Your home vibe is more like:",
    answerOptions: [
      {
        id: 1,
        answer: "🛋️ Cozy and soft",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Comfy couch with blankets",
      },
      {
        id: 2,
        answer: "🎨 Creative and messy",
        pieType: "pumpkin",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Art supplies and journals",
      },
      {
        id: 3,
        answer: "🕯️ Calm and minimal",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Minimal candlelit space",
      },
      {
        id: 4,
        answer: "🪞Stylish and bold",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Bold home decor",
      },
    ],
  },
  {
    id: 9,
    question: "How do your friends see you?",
    answerOptions: [
      {
        id: 1,
        answer: "💪 Strong & wise",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Power pose silhouette",
      },
      {
        id: 2,
        answer: "🧠 Weird but brilliant",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Funny face with glasses",
      },
      {
        id: 3,
        answer: "😍 Caring and sweet",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Smiling person hugging friend",
      },
      {
        id: 4,
        answer: "🥳 Energetic and fun",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Dancing in joy",
      },
    ],
  },
  {
    id: 10,
    question: "What shape do you want your samsa to be?",
    answerOptions: [
      {
        id: 1,
        answer: "🔺 Triangle — the classic",
        pieType: "classic",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Triangle samsa",
      },
      {
        id: 2,
        answer: "🟢 Round — soft inside, strong outside",
        pieType: "potato",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Round samsa",
      },
      {
        id: 3,
        answer: "🌀 Spiral — chaotic and beautiful",
        pieType: "lamb",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Spiral pastry",
      },
      {
        id: 4,
        answer: "🧿 Square — sharp and balanced",
        pieType: "cheese",
        imageUrl: "/images/samsa.avif",
        imageAlt: "Square samsa",
      },
    ],
  },
];


interface CardContent {
  question: string;
  imagesUrl: string[];
}

const QuestionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resArray, setResArray] = useState<PieType[]>([]);

  const handleClick = (answerOption: AnswerOption, index: number) => {
    setCurrentIndex(index + 1);
    setResArray((prev) => {
      return prev.concat(answerOption.pieType)
    })
  }
  return (
    <div className="max-w-3xl ">
      {questions.map((question, questionIndex) => (
        <Card className={cn(questionIndex !== currentIndex && 'hidden')} key={question.id}>
          <CardHeader>
            <ProgressBar />
            <CardTitle> {question.question}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {question.answerOptions.map((answerOption) => (
                <div key={answerOption.id} onClick={() => handleClick(answerOption, questionIndex)}>
                  <Image
                    priority={true}
                    src={answerOption.imageUrl}
                    width={100}
                    height={100}
                    alt={answerOption.imageAlt}
                    className="w-full rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all"
                  />
                  {answerOption.answer}
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
