import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./app/login/login.component";
import {ExamComponent} from "./app/exam/exam.component";
import {LogoutComponent} from "./app/logout/logout.component";
import {ExamCreateComponent} from "./app/exam/exam-create/exam-create.component";
import {ExamTakeComponent} from "./app/exam/exam-take/exam-take.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'exam/create', component: ExamCreateComponent },
  { path: 'exam/:id/take', component: ExamTakeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
