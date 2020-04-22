import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../login/authentication.service";

@Injectable()
export class AuthorizationTokenAddingInterceptor implements HttpInterceptor {

  constructor(private authentication: AuthenticationService) {
  }

  intercept(originalRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestWithAuthorizationHeader = this.authentication.addAuthorizationHeader(originalRequest);
    return next.handle(requestWithAuthorizationHeader);
  }
}
