import {Injectable} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {CookieStorageService} from "../cookies/cookie-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restClient: RestClientService, private cookies: CookieStorageService) {
  }

  public login(request: LoginRequest) {
    this.restClient.post('/login', request)
      .subscribe((authorizationToken: string) => this.storeInCookies(authorizationToken));
  }

  private storeInCookies(authorizationToken: string) {
    console.log(`Authorization token received: ${authorizationToken}`);
    this.cookies.authorizationToken = authorizationToken;
  }
}

interface LoginRequest {
  username: string;
  password: string;
}