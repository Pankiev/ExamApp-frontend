import {Injectable} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {Observable} from "rxjs";
import {UserExam} from "../exam/exam.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restClient: RestClientService) {
  }

  getUsers() {
    return this.restClient.get('/users');
  }

  getUserExamApproaches(userId: number | string): Observable<UserExam[]> {
    return this.restClient.get(`/users/${userId}/examApproaches`);
  }
}
