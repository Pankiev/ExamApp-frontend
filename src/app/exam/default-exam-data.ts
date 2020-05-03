import {UserExam} from "./exam.service";

export const DEFAULT_EXAM_DATA = <UserExam>Object.freeze({
  exam: {
    name: 'Wczytywanie...',
    questions: []
  },
  user: {
    username: "Nieznany",
    creationDate: -1,
    idInClass: -1,
    schoolClass: 'Nieznana klasa'
  },
  totalScore: -1,
  finished: false,
  questionsWithAnswers: [],
  testApproachDate: new Date(2000, 1, 1)
});
