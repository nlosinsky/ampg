import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from '../../../services';
import { AppState } from '../../../store';
import { User } from '../../../entities';

@Component({
  selector: 'main-header',
  templateUrl: 'header.template.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  username: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
        private authService: AuthService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    console.info('HeaderComponent initialised');

    this.isAuth = false;

    this.store.select(appState => appState.auth.authorized)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((data) => {
          if (this.isAuth && !data) {
            this.router.navigate(['login']);
          }

          this.isAuth = data;

          this.cd.markForCheck();
        });

    this.store.select(appState => appState.auth.user)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((user: User) => {
          if (user.name) {
            this.username = user.name.first;
          }

          this.cd.markForCheck();
        });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  logout(): void {
    this.authService.logout();
  }
}
