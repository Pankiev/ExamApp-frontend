import {UserExam} from "./exam.service";

export const DEFAULT_EXAM_DATA = <UserExam>Object.freeze({
  exam: {
    name: 'Wczytywanie...',
    questions: []
  },
  finished: false,
  questionsWithAnswers: [],
  testApproachDate: new Date(2000, 1, 1)
});
