import { PieType } from "@/generated/prisma";

export const results = [
  {
    nameKey: "classicName",
    type: PieType.CLASSIC,
    personalityKey: "classicPersonality",
    descriptionKey: "classicDescription",
    imageUrl: "/images/results/classic.jpg",
  },
  {
    nameKey: "pumpkinName",
    type: PieType.PUMPKIN,
    personalityKey: "pumpkinPersonality",
    descriptionKey: "pumpkinDescription",
    imageUrl: "/images/results/pumpkin.jpg",
  },
  {
    nameKey: "potatoName",
    type: PieType.POTATO,
    personalityKey: "potatoPersonality",
    descriptionKey: "potatoDescription",
    imageUrl: "/images/results/potato.jpg",
  },
  {
    nameKey: "cheeseName",
    type: PieType.CHEESE,
    personalityKey: "cheesePersonality",
    descriptionKey: "cheeseDescription",
    imageUrl: "/images/results/cheese.jpg",
  },
  {
    nameKey: "lambName",
    type: PieType.LAMB,
    personalityKey: "lambPersonality",
    descriptionKey: "lambDescription",
    imageUrl: "/images/results/onion.jpg",
  },
];
