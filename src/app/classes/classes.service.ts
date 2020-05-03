import {Injectable} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {User} from "../exam/exam.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private restClient: RestClientService) {
  }

  public getSchoolClassesWithUsers(): Observable<SchoolClass[]> {
    return this.restClient.get('/classesWithUsers');
  }
}

export interface SchoolClass {
  name: string;
  users: User[];
}
