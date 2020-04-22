import {Injectable} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {CookieStorageService} from "../cookies/cookie-storage.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restClient: RestClientService, private cookies: CookieStorageService) {
  }

  public login(request: LoginRequest) {
    return this.restClient.post('/login', request)
      .pipe(tap((authorizationToken: string) => this.storeInCookies(authorizationToken)));
  }

  private storeInCookies(authorizationToken: string) {
    this.cookies.authorizationToken = authorizationToken;
  }
}

interface LoginRequest {
  username: string;
  password: string;
}
