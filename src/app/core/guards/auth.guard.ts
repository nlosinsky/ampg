import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
			private router: Router,
			private store: Store<AppState>
	) {}

  public canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    let isAuth = false;

    this.store.select(appState => appState.auth.authorized)
      .subscribe((data) => {
        isAuth = data;

        if (!isAuth) {
          this.router.navigate(['login']);
        }
      });

    return isAuth;
  }
}
