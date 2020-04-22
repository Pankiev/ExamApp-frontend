import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieStorageService} from "../cookies/cookie-storage.service";

@Injectable()
export class AuthorizationTokenAddingInterceptor implements HttpInterceptor {

  constructor(private cookies: CookieStorageService) {
  }

  intercept(originalRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authorization = this.cookies.authorizationToken;
    if (authorization == null || authorization.length == 0) {
      return next.handle(originalRequest);
    }
    console.log(authorization);
    const requestWithAuthorizationHeader = originalRequest.clone({setHeaders: {'Authorization': authorization}});
    return next.handle(requestWithAuthorizationHeader);
  }
}
