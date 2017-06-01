import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { User, Login } from '../entities';
import { LSConstants, EndpointsConstant } from '../constants';
import { LocalStorageService } from './local-storage-service';
import { LoaderBlockService } from '../components/widgets';
import { RestService } from './rest.service';
import { AppState } from '../store';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_SET_USER_INFO,
  AUTH_SET_AUTHORIZED,
  AUTH_LOGIN_FAILURE,
  AUTH_SET_TOKEN
} from '../store/actions';

@Injectable()
export class AuthService {
  constructor(
      private localStorageService: LocalStorageService,
      private loaderBlockService: LoaderBlockService,
      private restService: RestService,
      private store: Store<AppState>
  ) {
    this.setUserInfo();
    this.setAuthorized();
  }

  login({ login, password }: Login): void {
    this.loaderBlockService.show();

    this.restService.post(EndpointsConstant.AUTH.LOGIN, { login, password })
        .do(({ token }) => {
          this.localStorageService.set(LSConstants.COURSES_TOKEN, token);

          this.store.dispatch({ type: AUTH_SET_TOKEN, payload: token });
        })
        .flatMap(() => this.restService.get(EndpointsConstant.AUTH.USER_INFO))
        .finally(() => this.loaderBlockService.hide())
        .subscribe(
            ({ id, login, name }) => {
              const user = new User(id, login, name);

              this.localStorageService.set(LSConstants.COURSES_USER, user);

              this.store.dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user });
            },
            () => this.store.dispatch({ type: AUTH_LOGIN_FAILURE })
        );
  }

  logout(): void {
    this.localStorageService.remove(LSConstants.COURSES_USER);
    this.localStorageService.remove(LSConstants.COURSES_TOKEN);
    this.setAuthorized();
    this.setUserInfo();
  }

  private setAuthorized(): void {
    const isAuthorized =  Boolean(
        this.localStorageService.get(LSConstants.COURSES_USER) &&
        this.localStorageService.get(LSConstants.COURSES_TOKEN)
    );

    this.store.dispatch({ type: AUTH_SET_AUTHORIZED, payload: isAuthorized });
  }

  private setUserInfo(): void {
    const user = this.localStorageService.get(LSConstants.COURSES_USER) || {};

    this.store.dispatch({ type: AUTH_SET_USER_INFO, payload: user });
  }
}
