import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./app/login/login.component";
import {ExamComponent} from "./app/exam/exam.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'exam', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
