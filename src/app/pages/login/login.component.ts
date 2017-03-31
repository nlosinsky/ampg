import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  styleUrls: ['login.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  login: string;
  password: string;
  private authSubscription: Subscription;

  constructor(
      private auth: AuthService,
      private cd: ChangeDetectorRef,
      private router: Router
  ) {
    this.login = '';
    this.password = '';
  }

  ngOnInit() {
    console.info('LoginComponent initialised');

    this.authSubscription = this.auth.authChanged.subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.router.navigate(['/']);
      }

      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  submit(): void {
    this.auth.login(
      {
        login: this.login,
        password: this.password
      },
      'some-token'
    );
  }
}
