import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(private cookies: CookieService) {
  }

  public get authorizationToken() {
      return this.cookies.get(this.authorizationTokenKey);
  }

  public set authorizationToken(authorizationHeader: string) {
    this.cookies.set(this.authorizationTokenKey, authorizationHeader, undefined, '/');
  }

  public hasAuthorizationToken() {
    return this.authorizationToken != null && this.authorizationToken.length > 0;
  }

  public removeAuthorizationToken() {
    this.cookies.delete(this.authorizationTokenKey, '/');
  }

  private get authorizationTokenKey() {
    return 'Authorization';
  }
}
