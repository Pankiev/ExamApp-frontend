import { Injectable } from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private restClient: RestClientService) { }

  findAll() {
    return this.restClient.get('/exam');
  }
}
