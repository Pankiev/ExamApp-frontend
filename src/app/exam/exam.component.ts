import {Component, OnInit} from '@angular/core';
import {Exam, ExamService, UserExam} from "./exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  host: {'class': 'w-100'}
})
export class ExamComponent implements OnInit {

  exams: Exam[];
  examsApproaches = new Map<number, UserExam[]>();

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
    this.examService.findAll()
      .subscribe(exams => this.exams = exams);
  }

  fetchExamApproaches(examId: number) {
    if (this.areExamApproachesLoaded(examId)) {
      return;
    }
    this.examService.getExamApproaches(examId)
      .subscribe(approachesData => this.examsApproaches.set(examId, approachesData));
  }

  areExamApproachesLoaded(examId: number): boolean {
    return this.examsApproaches.get(examId) != null;
  }

  getExamApproaches(examId: number): UserExam[] {
    return this.examsApproaches.get(examId);
  }
}
