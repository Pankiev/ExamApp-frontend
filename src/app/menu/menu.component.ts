import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../login/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  showLoginButton(): boolean {
    return !this.authentication.isLoggedIn();
  }

  showUserData() {
    return !this.showLoginButton();
  }

  getUserName() {
    const userDetails = this.authentication.getUserDetails();
    return userDetails['sub'];
  }

  showLogoutButton() {
    return !this.showLoginButton();
  }
}
