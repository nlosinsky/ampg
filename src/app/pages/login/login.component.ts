import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from '../../core/services';
import { Login } from '../../core/entities';
import { AppState } from '../../core/store';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private authService: AuthService,
      private cd: ChangeDetectorRef,
      private router: Router,
      private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.info('LoginComponent initialised');

    this.store.select(appState => appState.auth.authorized)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((isAuth: boolean) => {
          if (isAuth) {
            this.router.navigate(['courses']);
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
