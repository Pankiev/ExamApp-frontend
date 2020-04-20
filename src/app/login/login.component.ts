import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.username = 'qwe';
    this.password = 'asd';
  }
}
