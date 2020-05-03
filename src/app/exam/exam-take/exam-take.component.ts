import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Answer, ExamService, UserExam} from "../exam.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {DEFAULT_EXAM_DATA} from "../default-exam-data";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-exam-take',
  templateUrl: './exam-take.component.html',
  styleUrls: ['./exam-take.component.css']
})
export class ExamTakeComponent implements OnInit {

  private examId: string;
  examData: UserExam = DEFAULT_EXAM_DATA;

  constructor(private route: ActivatedRoute, private router: Router, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.examId = params.get('id');
      return this.examService.takeTest(this.examId);
    })).subscribe(examData => this.examData = examData, (error: HttpErrorResponse) => {
      if (error.error === 'Exam has been already taken') {
        this.router.navigate(['/exam', this.examId, 'myResult']);
      }
    });
  }

  onAnswerChooseChange($event: MatCheckboxChange, answer: Answer) {
    if ($event.checked) {
      this.answerSelected(answer);
    } else {
      this.answerDeselected(answer);
    }
  }

  private answerSelected(answer: Answer) {
    this.examService.chooseAnswer(answer.id)
      .subscribe(success => console.log(`Answer id ${answer.id} selected`));
  }

  private answerDeselected(answer: Answer) {
    this.examService.unchooseAnswer(answer.id)
      .subscribe(success => console.log(`Answer id ${answer.id} deselected`));
  }

  isAnswerChosen(answer: Answer): boolean {
    return this.examData.questionsWithAnswers
      .filter(existingUserAnswer => existingUserAnswer.answer.id == answer.id)
      .length > 0;
  }

  submit() {
    this.examService.submitExam(this.examId)
      .subscribe(result => this.router.navigate(['/exam', this.examId, 'myResult']));
  }
}
