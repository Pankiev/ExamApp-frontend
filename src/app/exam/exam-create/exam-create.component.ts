import {Component, OnInit} from '@angular/core';
import {Answer, Exam, ExamService, Question} from "../exam.service";

@Component({
  selector: 'app-exam-create',
  templateUrl: './exam-create.component.html',
  styleUrls: ['./exam-create.component.css'],
  host: {'class': 'w-auto'}
})
export class ExamCreateComponent implements OnInit {

  exam: Exam = this.getDefaultExam();

  constructor(private examService: ExamService) {
  }

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
      valid: false
    };
  }

  ngOnInit(): void {
  }

  addQuestion() {
    this.exam.questions.push(this.getDefaultQuestion());
  }

  addAnswer(question: Question) {
    question.answers.push(this.getDefaultAnswer());
  }

  submit() {
    this.examService.saveNew(this.exam).subscribe((newExam: Exam) => {
      this.exam = newExam;
      console.log(this.exam);
    });
  }
}
