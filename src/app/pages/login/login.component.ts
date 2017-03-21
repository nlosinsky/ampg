import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  styleUrls: ['login.template.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private auth: AuthService) {
    this.login = '';
    this.password = '';
  }

  ngOnInit() {
    console.info('LoginComponent initialised');
  }

  submit(): void {
    this.auth.login({
      login: this.login,
      password: this.password
    },              'some-token');
  }
}
