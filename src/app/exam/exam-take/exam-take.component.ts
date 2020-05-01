import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ExamService, UserExam} from "../exam.service";

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
}
