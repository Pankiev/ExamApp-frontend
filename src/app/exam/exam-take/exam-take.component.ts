import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Answer, ExamService, UserExam} from "../exam.service";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-exam-take',
  templateUrl: './exam-take.component.html',
  styleUrls: ['./exam-take.component.css']
})
export class ExamTakeComponent implements OnInit {

  examData: UserExam = this.createDefaultExamData();

  constructor(private route: ActivatedRoute, private examService: ExamService) {
  }

  private createDefaultExamData(): UserExam {
    return {
      exam: {
        name: 'Wczytywanie...',
        questions: []
      },
      finished: false,
      questionsWithAnswers: [],
      testApproachDate: new Date(2000, 1, 1)
    };
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      return this.examService.takeTest(params.get('id'));
    })).subscribe(examData => this.examData = examData);
  }

  submit() {
    console.log('Submitted');
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
}
