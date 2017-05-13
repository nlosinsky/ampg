import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  private isAuth: boolean;

  constructor(
			private router: Router,
			private authService: AuthService
	) {}

  public canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    this.authService.authChanged.subscribe((data) => {
      this.isAuth = data;

      if (!this.isAuth) {
        this.router.navigate(['login']);
      }
    });

    return this.isAuth;
  }
}
