import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(private cookies: CookieService) {
  }

  get authorizationToken() {
      return this.cookies.get(this.authorizationTokenKey);
  }

  set authorizationToken(authorizationHeader: string) {
    this.cookies.set(this.authorizationTokenKey, authorizationHeader);
  }

  private get authorizationTokenKey() {
    return 'Authorization';
  }
}
