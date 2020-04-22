import {EventEmitter, Injectable, Output} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {CookieStorageService} from "../cookies/cookie-storage.service";
import {tap} from "rxjs/operators";
import {HttpRequest} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private jwtService = new JwtHelperService();

  constructor(private restClient: RestClientService, private cookies: CookieStorageService) {
  }

  public login(request: LoginRequest) {
    return this.restClient.post('/login', request)
      .pipe(tap((authorizationToken: string) => this.storeInCookies(authorizationToken)));
  }

  private storeInCookies(authorizationToken: string) {
    this.cookies.authorizationToken = authorizationToken;
  }

  public isLoggedIn() {
    return this.cookies.hasAuthorizationToken() && !this.jwtService.isTokenExpired(this.cookies.authorizationToken);
  }

  public addAuthorizationHeader(request: HttpRequest<unknown>) {
    if (!this.cookies.hasAuthorizationToken()) {
      return request;
    }
    return request.clone({setHeaders: {'Authorization': this.cookies.authorizationToken}});
  }

  public logout() {
    return this.cookies.removeAuthorizationToken();
  }

  public getUserDetails() {
    return this.jwtService.decodeToken(this.cookies.authorizationToken);
  }
}

interface LoginRequest {
  username: string;
  password: string;
}

interface UserDetails {

}
