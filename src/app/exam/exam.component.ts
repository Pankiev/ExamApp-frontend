import { Component, OnInit } from '@angular/core';
import {Exam, ExamService} from "./exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  host: {'class': 'w-100'}
})
export class ExamComponent implements OnInit {

  exams: Exam[];

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.findAll()
      .subscribe(exams => this.exams = exams);
  }
}
