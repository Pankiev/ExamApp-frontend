import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ExamService, UserExam} from "../exam.service";
import {DEFAULT_EXAM_DATA} from "../default-exam-data";
import {switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'my-exam-result',
  templateUrl: './my-exam-result.component.html',
  styleUrls: ['./my-exam-result.component.css']
})
export class MyExamResultComponent implements OnInit {

  examId: number | string;
  userExamResultDetails: UserExam = DEFAULT_EXAM_DATA;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
        this.examId = params.get('id');
        return this.examService.getUserExamResultDetails(this.examId);
      }
    )).subscribe(examData => this.userExamResultDetails = examData, (error: HttpErrorResponse) => {
      if (error.status == 404) {
        this.errorMessage = 'Nie rozwiązywałeś jeszcze tego egzaminu!';
      } else if (error.error === 'Exam is not finished yet') {
        this.errorMessage = 'Test nie został jeszcze ukończony!';
      } else {
        this.errorMessage = 'Nieznany błąd: ' + error.error;
      }
    });
  }

  getTestApproachDate() {
    return new Date(this.userExamResultDetails.testApproachDate).toLocaleString();
  }

  navigateToTakeExam() {
    this.router.navigate(['/exam/', this.examId, 'take']);
  }
}
