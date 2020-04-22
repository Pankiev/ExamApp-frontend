import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  static navigateToQueryParamKey: string = 'navigateTo';

  queryParameters: Params;
  username: string = '';
  password: string = '';
  loggingError: string = '';

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParameters = params;
    });
  }

  login() {
    this.loggingError = '';
    this.loginService.login({username: this.username, password: this.password})
      .subscribe(success => this.router.navigate([this.getNavigationUrl()]),
        error => this.loggingError = error.error);
  }

  private getNavigationUrl() {
    const queryParamNavigation = this.queryParameters[LoginComponent.navigateToQueryParamKey];
    if (queryParamNavigation != null) {
      return queryParamNavigation;
    }
    return '/';
  }
}
