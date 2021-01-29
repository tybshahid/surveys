import { Question } from "./question";

export interface Survey {
  id: string;
  name: string;
  questions: Question[];
}
