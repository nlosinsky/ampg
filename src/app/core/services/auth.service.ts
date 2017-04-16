import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { User } from '../entities/user';
import { LSConstants, EndpointsConstant } from '../constants';
import { LocalStorageService } from './local-storage-service';
import { LoaderBlockService } from '../components/loader-block';
import { RestService } from './rest.service';

@Injectable()
export class AuthService {
  public userInfo: ReplaySubject<User|Object> = new ReplaySubject();
  public authChanged: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthenticated());

  constructor(
      private localStorageService: LocalStorageService,
      private loaderBlockService: LoaderBlockService,
      private restService: RestService
  ) {
    this.userInfo.next(this.getUserInfo());
  }

  login(login: string, password: string): void {
    this.loaderBlockService.show();

    this.restService.post(EndpointsConstant.AUTH.LOGIN, { login, password })
        .subscribe(
            ({ token }) => {
              this.localStorageService.set(LSConstants.COURSES_TOKEN, token);
              this.authChanged.next(true);

              this.restService.get(EndpointsConstant.AUTH.USER_INFO)
                  .subscribe(
                      ({ id, login, name }) => {
                        const user = new User(id, login, name);

                        this.userInfo.next(user);
                        this.localStorageService.set(LSConstants.COURSES_USER, user);
                      },
                      null,
                      () => this.loaderBlockService.hide()
                  );
            },
            () => {
              this.authChanged.next(false);
              this.loaderBlockService.hide();
            }
        );
  }

  logout(): void {
    this.localStorageService.remove(LSConstants.COURSES_USER);
    this.localStorageService.remove(LSConstants.COURSES_TOKEN);
    this.authChanged.next(false);
    this.userInfo.next(this.getUserInfo());
  }

  private isAuthenticated(): boolean {
    return Boolean(
        this.localStorageService.get(LSConstants.COURSES_USER) &&
        this.localStorageService.get(LSConstants.COURSES_TOKEN)
    );
  }

  private getUserInfo(): User|Object {
    return this.localStorageService.get(LSConstants.COURSES_USER) || {};
  }
}
