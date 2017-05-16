import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthService } from '../../core/services';
import { Login } from '../../core/entities';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public loginForm: Login = {
    login: '',
    password: ''
  };

  constructor(
      private authService: AuthService,
      private cd: ChangeDetectorRef,
      private router: Router
  ) {}

  ngOnInit(): void {
    console.info('LoginComponent initialised');

    this.authService.authChanged
        .takeUntil(this.ngUnsubscribe)
        .subscribe((isAuth: boolean) => {
          if (isAuth) {
            this.router.navigate(['/']);
          }

          this.cd.markForCheck();
        });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit({ value }: { value: Login }): void {
    this.authService.login(value);
  }
}
