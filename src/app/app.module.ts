import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpErrorLoggingInterceptor} from "./error/http-error-logging.interceptor";
import {AuthorizationTokenAddingInterceptor} from "./authorization/authorization-token-adding.interceptor";
import {CookieService} from "ngx-cookie-service";
import {CookieStorageService} from "./cookies/cookie-storage.service";
import {ExamComponent} from './exam/exam.component';
import {UnauthorizedErrorHandlerInterceptor} from "./error/unauthorized-error-handler.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorLoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationTokenAddingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedErrorHandlerInterceptor,
      multi: true
    },
    CookieService,
    CookieStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
