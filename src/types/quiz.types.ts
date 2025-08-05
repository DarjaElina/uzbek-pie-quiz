import { PieType } from "./pie.types";

export interface AnswerOption {
  id: number;
  answer: string;
  pieType: PieType;
  imageUrl: string;
  imageAlt: string;
}

export interface Question {
  id: number;
  question: string;
  answerOptions: AnswerOption[];
}

export interface PieResult {
  name: string;
  type: PieType;
  personality: string;
  description: string;
  imageUrl: string;
}
