import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Injectable()
export class UnauthorizedErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (this.isUnauthorized(err.status)) {
        this.router.navigate(['/login'], {queryParams: {[LoginComponent.navigateToQueryParamKey]: this.router.url}});
      }
      return throwError(err);
    }));
  }

  private isUnauthorized(httpStatusCode) {
    return httpStatusCode === 401;
  }
}
