import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExamResultComponent } from './my-exam-result.component';

describe('ExamShowComponent', () => {
  let component: MyExamResultComponent;
  let fixture: ComponentFixture<MyExamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
