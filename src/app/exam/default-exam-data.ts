import {UserExam} from "./exam.service";

export const DEFAULT_EXAM_DATA = <UserExam>Object.freeze({
  exam: {
    name: 'Wczytywanie...',
    questions: []
  },
  user: {
    username: "Nieznany"
  },
  totalScore: -1,
  finished: false,
  questionsWithAnswers: [],
  testApproachDate: new Date(2000, 1, 1)
});
