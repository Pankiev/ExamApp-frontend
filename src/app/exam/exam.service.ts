import { Injectable } from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private restClient: RestClientService) { }

  findAll(): Observable<Exam[]> {
    return this.restClient.get('/exam');
  }

  saveNew(exam: Exam): Observable<Exam> {
    return this.restClient.post('/exam/create', exam)
  }

  takeTest(examId: number | string): Observable<UserExam> {
    return this.restClient.post(`/exam/${examId}/takeTest`);
  }

  chooseAnswer(answerId: number | string) {
    return this.restClient.post(`/exam/chooseAnswer/${answerId}`);
  }

  unchooseAnswer(answerId: number | string) {
    return this.restClient.post(`/exam/unchooseAnswer/${answerId}`);
  }
}

export interface UserExam {
  exam: Exam;
  testApproachDate: Date;
  questionsWithAnswers: QuestionsAnswer[];
  finished: boolean;
}

export interface QuestionsAnswer {
  question: Question;
  answer: Answer;
}

export interface Exam {
  id?: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id?: number;
  question: string;
  secondsForAnswer: number;
  answers: Answer[];
}

export interface Answer {
  id?: number;
  valid: boolean;
  answer: string;
}
