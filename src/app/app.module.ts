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
import {LogoutComponent} from './logout/logout.component';
import {MenuComponent} from './menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {ExamCreateComponent} from './exam/exam-create/exam-create.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent,
    LogoutComponent,
    MenuComponent,
    ExamCreateComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorLoggingInterceptor,
      multi: true
    },
    CookieService,
    CookieStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
