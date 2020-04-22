import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {ResponseDeserializerService} from "../response-deserializer/response-deserializer.service";

@Injectable()
export class HttpErrorLoggingInterceptor implements HttpInterceptor {

  constructor(private responseDeserializer: ResponseDeserializerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      const errorMessage = this.responseDeserializer.deserialize(err.headers.get('Content-Type'), err.error);
      console.error(errorMessage);
      err.error = errorMessage;
      return throwError(err);
    }));
  }
}
