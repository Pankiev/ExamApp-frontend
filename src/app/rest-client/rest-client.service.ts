import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseDeserializerService} from "../response-deserializer/response-deserializer.service";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient, private responseDeserializer: ResponseDeserializerService) {
  }

  get(url: string): Observable<Object> {
    console.log(`Making get request to ${url}`);
    return this.http.get(environment.apiLocation + url, {observe: 'response', responseType: 'arraybuffer'})
      .pipe(map((response: HttpResponse<ArrayBuffer>) => {
        return this.responseDeserializer.deserialize(response.headers.get('Content-Type'), response.body);
      }));
  }

  post(url: string, body: any): Observable<Object> {
    console.log(`Making post request to ${url} with body ${JSON.stringify(body)}`);
    return this.http.post(environment.apiLocation + url, body, {observe: 'response', responseType: 'arraybuffer'})
      .pipe(map((response: HttpResponse<ArrayBuffer>) => {
        return this.responseDeserializer.deserialize(response.headers.get('Content-Type'), response.body);
      }));
  }
}
