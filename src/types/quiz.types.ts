import { PieType } from "./pie.types";

export interface AnswerOption {
  id: number;
  answerKey: string;
  pieType: PieType;
  imageUrl: string;
  imageAlt: string;
  answer?: string;
}

export interface Question {
  id: number;
  questionKey: string;
  question?: string;
  answerOptions: AnswerOption[];
}

export interface PieResult {
  name?: string;
  type: PieType;
  personality?: string;
  description?: string;
  imageUrl: string;
}

export interface LocalizedPieResult {
  nameKey: string;
  descriptionKey: string;
  personalityKey: string;
}
