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
