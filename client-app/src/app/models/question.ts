import { Option } from "./option";

export interface Question {
  id: string;
  createdBy: string;
  createdDateTime: String; // Keeping as String since data is being loaded from mock json file and not the actual API
  title: string;
  subTitle: string;
  questionType: number;
  options: Option[];
}
