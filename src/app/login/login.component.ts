import {Component, OnInit} from '@angular/core';
import {RestClientService} from "../rest-client/rest-client.service";
import {CookieStorageService} from "../cookies/cookie-storage.service";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login({username: this.username, password: this.password});
  }
}

interface LoginRequest {
  username: string;
  password: string;
}
