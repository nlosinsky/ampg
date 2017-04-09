import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from '../entities/user';
import { LocalStorageService } from './local-storage-service';
import { LoaderBlockService } from '../components/loader-block';

@Injectable()
export class AuthService {
  private COURSE_USER: string = 'coursesUser';
  private COURSE_TOKEN: string = 'coursesToken';
  public userInfo: ReplaySubject<User|Object> = new ReplaySubject();
  public authChanged: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthenticated());

  constructor(
      private localStorageService: LocalStorageService,
      private loaderBlockService: LoaderBlockService
  ) {
    this.userInfo.next(this.getUserInfo());
  }

  login(user: User, token: string): void {
    this.loaderBlockService.show();

    this.localStorageService.set(this.COURSE_USER, user);
    this.localStorageService.set(this.COURSE_TOKEN, token);

    setTimeout(
        () => {
          this.authChanged.next(true);
          this.userInfo.next(user);

          this.loaderBlockService.hide();

          console.log('User has logged in!');

        },
        1000
    );
  }

  logout(): void {
    this.loaderBlockService.show();

    this.localStorageService.remove(this.COURSE_USER);
    this.localStorageService.remove(this.COURSE_TOKEN);

    setTimeout(
        () => {
          this.authChanged.next(false);
          this.userInfo.next(this.getUserInfo());

          this.loaderBlockService.hide();

          console.log('User has logged out!');
        },
        1000
    );
  }

  private isAuthenticated(): boolean {
    return Boolean(this.localStorageService.get(this.COURSE_USER) && this.localStorageService.get(this.COURSE_TOKEN));
  }

  private getUserInfo(): User|Object {
    return this.localStorageService.get(this.COURSE_USER) || {};
  }
}
