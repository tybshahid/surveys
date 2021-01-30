import { Survey } from "../models/survey";
import data from "./surveys.mock.json";

// Currently loading data from mock json file, actual implementation to be done using AXIOS
const Surveys = {
  list: () => data.surveys as Survey[],
  details: (id: string) =>
    data.surveys.find((survey) => survey.id === id) as Survey,
};
const agent = {
  Surveys,
};

export default agent;
