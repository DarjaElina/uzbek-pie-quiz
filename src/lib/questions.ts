import { Question } from "@/types/quiz.types";

import { PieType } from "@/generated/prisma";

export const questions: Question[] = [
  {
    id: 1,
    question: "What kind of bazaar do you love the most?",
    answerOptions: [
      {
        id: 1,
        answer: "Spices & smells everywhere",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question1/spices.avif",
        imageAlt: "Spices in bowls",
      },
      {
        id: 2,
        answer: "Handicrafts & embroidery",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question1/handicraft.avif",
        imageAlt: "Handmade crafts and threads",
      },
      {
        id: 3,
        answer: "Fruits and warm bread",
        pieType: PieType.POTATO,
        imageUrl: "/images/question1/fruits.avif",
        imageAlt: "Fruits in a market",
      },
      {
        id: 4,
        answer: "Silks, ceramics & old books",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question1/ceramics.avif",
        imageAlt: "Colorful pottery",
      },
    ],
  },
  {
    id: 2,
    question: "Your ideal morning ritual?",
    answerOptions: [
      {
        id: 1,
        answer: "Brewing tea slowly",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question2/tea.avif",
        imageAlt: "A teapot and a cup",
      },
      {
        id: 2,
        answer: "Making breakfast for loved ones",
        pieType: PieType.POTATO,
        imageUrl: "/images/question2/breakfast.avif",
        imageAlt: "Bread, eggs and butter on the table",
      },
      {
        id: 3,
        answer: "Quiet journaling or sketching",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question2/journaling.avif",
        imageAlt: "Notebook and pen",
      },
      {
        id: 4,
        answer: "Dancing while cleaning",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question2/cleaning-and-dancing.jpg",
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
        answer: "Chili (bold & hot)",
        pieType: PieType.LAMB,
        imageUrl: "/images/question3/chili.avif",
        imageAlt: "Chili peppers",
      },
      {
        id: 2,
        answer: "Cumin (earthy & deep)",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question3/cumin.avif",
        imageAlt: "Cumin seeds",
      },
      {
        id: 3,
        answer: "Cinnamon (sweet & warm)",
        pieType: PieType.POTATO,
        imageUrl: "/images/question3/cinnamon.avif",
        imageAlt: "Cinnamon sticks",
      },
      {
        id: 4,
        answer: "Garlic (strong & honest)",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question3/garlic.avif",
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
        answer: "Suzani flowers",
        pieType: PieType.POTATO,
        imageUrl: "/images/question4/suzani-flowers.png",
        imageAlt: "Suzani flower embroidery",
      },
      {
        id: 2,
        answer: "Ikat waves",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question4/ikat-waves.png",
        imageAlt: "Ikat textile pattern",
      },
      {
        id: 3,
        answer: "Geometric tiles",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question4/geometric-tiles.png",
        imageAlt: "Tiled wall with patterns",
      },
      {
        id: 4,
        answer: "Gold-thread embroidery",
        pieType: PieType.LAMB,
        imageUrl: "/images/question4/gold-thread.png",
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
        answer: "Breathe and find the calm",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question5/breath.avif",
        imageAlt: "Person meditating calmly",
      },
      {
        id: 2,
        answer: "Make a joke and roll with it",
        pieType: PieType.POTATO,
        imageUrl: "/images/question5/laugh.avif",
        imageAlt: "Laughing child",
      },
      {
        id: 3,
        answer: "Express it, loud and proud",
        pieType: PieType.LAMB,
        imageUrl: "/images/question5/angry.avif",
        imageAlt: "Angry eagle",
      },
      {
        id: 4,
        answer: "Hide feelings, help others instead",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question5/help-others.jpg",
        imageAlt: "Woman wiping the tears of a crying woman",
      },
    ],
  },
  {
    id: 6,
    question: "Pick a comfort food on a cold day:",
    answerOptions: [
      {
        id: 1,
        answer:
          "Lagman (a noodle soup made with beef, garlic, tomato paste, vegetables, and cumin)",
        pieType: PieType.LAMB,
        imageUrl: "/images/question6/lagman.jpg",
        imageAlt: "Hot bowl of lagman",
      },
      {
        id: 2,
        answer: "Fresh non (traditional bread from Uzbekistan) with butter",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/gallery/uzbek-bread.avif",
        imageAlt: "Bread",
      },
      {
        id: 3,
        answer: "Samsa, obviously",
        pieType: PieType.POTATO,
        imageUrl: "/images/gallery/samsa.avif",
        imageAlt: "Warm samsa pastry",
      },
      {
        id: 4,
        answer: "Pumpkin soup with herbs",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question6/pumpkin-soup.avif",
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
        answer: "Green tea with mint",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question7/green.avif",
        imageAlt: "Mint tea in cup",
      },
      {
        id: 2,
        answer: "Black tea, no sugar",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question2/tea.avif",
        imageAlt: "Black tea",
      },
      {
        id: 3,
        answer: "Lemon & ginger",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question7/ginger-tea.avif",
        imageAlt: "Lemon ginger tea",
      },
      {
        id: 4,
        answer: "Dried fruit infusion",
        pieType: PieType.POTATO,
        imageUrl: "/images/question7/fruit-tea.avif",
        imageAlt: "Fruit tea with dried fruits",
      },
    ],
  },
  {
    id: 8,
    question: "Your home vibe is more like:",
    answerOptions: [
      {
        id: 1,
        answer: "Cozy and soft",
        pieType: PieType.POTATO,
        imageUrl: "/images/question8/cozy.avif",
        imageAlt: "Cozy bedroomw ith book, candle and cup of tea",
      },
      {
        id: 2,
        answer: "Creative and messy",
        pieType: PieType.PUMPKIN,
        imageUrl: "/images/question8/messy-home.avif",
        imageAlt: "Living room with many items",
      },
      {
        id: 3,
        answer: "Calm and minimal",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question8/minimalist-home.avif",
        imageAlt: "Minimalist space with plant and wall clock",
      },
      {
        id: 4,
        answer: "Stylish and bold",
        pieType: PieType.LAMB,
        imageUrl: "/images/question8/bold-home.avif",
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
        answer: "Strong & wise",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question9/wise.avif",
        imageAlt: "Master Yoda",
      },
      {
        id: 2,
        answer: "Weird but brilliant",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question9/weird-brilliant.avif",
        imageAlt: "Statue with seagul sitting on its head",
      },
      {
        id: 3,
        answer: "Caring and sweet",
        pieType: PieType.POTATO,
        imageUrl: "/images/question9/loving.avif",
        imageAlt: "Cute cat",
      },
      {
        id: 4,
        answer: "Energetic and fun",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question9/energetic.avif",
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
        answer: "Triangle — the classic",
        pieType: PieType.CLASSIC,
        imageUrl: "/images/question10/triangle.jpg",
        imageAlt: "Triangle samsa",
      },
      {
        id: 2,
        answer: "Round — soft inside, strong outside",
        pieType: PieType.POTATO,
        imageUrl: "/images/question10/round.jpg",
        imageAlt: "Round samsa",
      },
      {
        id: 3,
        answer: "Spiral — chaotic and beautiful",
        pieType: PieType.LAMB,
        imageUrl: "/images/question10/spiral.jpg",
        imageAlt: "Spiral pastry",
      },
      {
        id: 4,
        answer: "Square — sharp and balanced",
        pieType: PieType.CHEESE,
        imageUrl: "/images/question10/square.jpg",
        imageAlt: "Square samsa",
      },
    ],
  },
];

export const results = [
  {
    name: "Classic Meat Samsa",
    type: PieType.CLASSIC,
    personality: "🥟 Bold · Grounded · Loyal",
    description:
      "You're the dependable one. Warm, filling, timeless. People come to you for advice and solid hugs. You might seem tough on the outside, but once you're cracked open—pure comfort. You're the kind of person who brings tea and deep life chats.",
    imageUrl: "/images/results/classic.jpg",
  },
  {
    name: "Pumpkin & Herb Samsa",
    type: PieType.PUMPKIN,
    personality: "🎨 Soft · Thoughtful · Artistic",
    description:
      "You glow from within, like a golden sunset over Samarkand. Sensitive to beauty, full of quiet wisdom. You’re cozy and deep—a true romantic soul. Might cry over a beautiful flower. And that's okay.",
    imageUrl: "/images/results/pumpkin.jpg",
  },
  {
    name: "Potato Samsa",
    personality: "🤝 Loyal · Funny · Kind",
    type: PieType.POTATO,
    description:
      "Simple? Never. You're grounding and comforting—people need you more than they realize. Silly at times, but incredibly dependable. You show love by making people laugh and feeding them snacks.",
    imageUrl: "/images/results/potato.jpg",
  },
  {
    name: "Cheese & Greens Samsa",
    personality: "🍃 Fresh · Playful · Clever",
    type: PieType.CHEESE,
    description:
      "You're full of energy and charm. You're the “let's do something fun!” person. A bit quirky, always refreshing. You bring zing to any group like a squeeze of lemon.",
    imageUrl: "/images/results/cheese.jpg",
  },
  {
    name: "Lamb Fat & Onion Samsa",
    type: PieType.LAMB,
    personality: "🔥 Intense · Passionate · Dramatic",
    description:
      "You're a flavor bomb. People remember you. You love hard, live big, and never back down from a challenge. You might monologue while making tea. And it's iconic.",
    imageUrl: "/images/results/onion.jpg",
  },
];
