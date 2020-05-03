import {Component, OnInit} from '@angular/core';
import {User, UserExam} from "../exam/exam.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  private userExamApproaches: Map<number, UserExam[]> = new Map();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getCreatedDate(user: User) {
    return new Date(user.creationDate).toLocaleDateString();
  }

  fetchUserExamApproaches(userId: number) {
    if (this.areUserExamsFetched(userId)) {
      return;
    }
    this.userService.getUserExamApproaches(userId)
      .subscribe(userExams => this.userExamApproaches.set(userId, userExams));
  }

  areUserExamsFetched(userId: number): boolean {
    return this.getUserExams(userId) != null;
  }

  getUserExams(userId: number) {
    return this.userExamApproaches.get(userId);
  }
}
