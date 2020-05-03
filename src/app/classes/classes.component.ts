import {Component, OnInit} from '@angular/core';
import {ClassesService, SchoolClass} from "./classes.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  schoolClasses: SchoolClass[] = [];

  constructor(private classesService: ClassesService) {
  }

  ngOnInit(): void {
    this.classesService.getSchoolClassesWithUsers()
      .subscribe(resultData => this.schoolClasses = resultData);
  }

}
