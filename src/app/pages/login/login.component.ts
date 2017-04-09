import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services';
import { Subscription } from 'rxjs';
import { LoaderBlockService } from '../../core/components';
import { User } from '../../core/entities';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  login: string;
  password: string;
  private authSubscription: Subscription;

  constructor(
      private authService: AuthService,
      private cd: ChangeDetectorRef,
      private router: Router,
      private loaderBlockService: LoaderBlockService
  ) {
    this.login = '';
    this.password = '';
  }

  ngOnInit(): void {
    console.info('LoginComponent initialised');

    this.authSubscription = this.authService.authChanged.subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.router.navigate(['/']);
      }

      this.loaderBlockService.hide();
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  submit(): void {
    this.loaderBlockService.show();

    this.authService.login(new User(this.login, this.password), 'some-token');
  }
}
