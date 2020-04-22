import { Component, OnInit } from '@angular/core';
import {ExamService} from "./exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  exams: string = 'No data';

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.findAll()
      .subscribe(exams => this.exams = JSON.stringify(exams));
  }

}
