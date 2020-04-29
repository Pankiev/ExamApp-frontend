import {Component, OnInit} from '@angular/core';
import {Answer, Exam, Question} from "../exam.service";

@Component({
  selector: 'app-exam-create',
  templateUrl: './exam-create.component.html',
  styleUrls: ['./exam-create.component.css'],
  host: {'class': 'w-auto'}
})
export class ExamCreateComponent implements OnInit {

  exam: Exam = this.getDefaultExam();

  private getDefaultExam(): Exam {
    return {
      name: '',
      questions: [this.getDefaultQuestion()]
    };
  }

  private getDefaultQuestion(): Question {
    return {
      secondsForAnswer: 60,
      answers: [this.getDefaultAnswer()],
      question: 'Twoje pytanie'
    };
  }

  private getDefaultAnswer(): Answer {
    return {
      answer: 'Twoja odpowiedź',
      valid: true
    };
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.exam);
  }

  addQuestion() {
    this.exam.questions.push(this.getDefaultQuestion());
  }

  addAnswer(question: Question) {
    question.answers.push(this.getDefaultAnswer());
  }
}
