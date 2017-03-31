import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';

@Injectable()
export class AuthService{
  public userInfo = new BehaviorSubject<User>(this.getUserInfo());
  public authChanged = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() {}

  login(user: User, token: string): void {

    localStorage.setItem('coursesUser', JSON.stringify(user));
    localStorage.setItem('coursesToken', token);

    this.authChanged .next(true);
    this.userInfo.next(user);

    console.log('User has logged in!');
  }

  logout(): void {
    localStorage.removeItem('coursesUser');
    localStorage.removeItem('coursesToken');

    this.authChanged .next(false);
    this.userInfo.next(this.getUserInfo());

    console.log('User has logged out!');
  }

  private isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('coursesUser') && localStorage.getItem('coursesToken'));
  }

  private getUserInfo(): User {
    return JSON.parse(localStorage.getItem('coursesUser')) || {};
  }
}
