import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  login: string;
  password: string;

  constructor(
      private authService: AuthService,
      private cd: ChangeDetectorRef,
      private router: Router
  ) {
    this.login = '';
    this.password = '';
  }

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

  submit(): void {
    this.authService.login(this.login, this.password);
  }
}
