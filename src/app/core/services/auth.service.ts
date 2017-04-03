import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';
import { LocalStorageService } from './local-storage-service';

@Injectable()
export class AuthService {
  private COURSE_USER: string = 'coursesUser';
  private COURSE_TOKEN: string = 'coursesToken';
  public userInfo = new BehaviorSubject<User>(this.getUserInfo());
  public authChanged = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(
      private localStorageService: LocalStorageService
  ) {}

  login(user: User, token: string): void {

    this.localStorageService.set(this.COURSE_USER, user);
    this.localStorageService.set(this.COURSE_TOKEN, token);

    setTimeout(
        () => {
          this.authChanged.next(true);
          this.userInfo.next(user);

          console.log('User has logged in!');
        },
        1000
    );
  }

  logout(): void {
    this.localStorageService.remove(this.COURSE_USER);
    this.localStorageService.remove(this.COURSE_TOKEN);

    setTimeout(
        () => {
          this.authChanged.next(false);
          this.userInfo.next(this.getUserInfo());

          console.log('User has logged out!');
        },
        1000
    );
  }

  private isAuthenticated(): boolean {
    return Boolean(this.localStorageService.get(this.COURSE_USER) && this.localStorageService.get(this.COURSE_TOKEN));
  }

  private getUserInfo(): User {
    return this.localStorageService.get(this.COURSE_USER) || {};
  }
}
