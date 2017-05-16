import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../../services';
import { Subject } from 'rxjs';
import { User } from '../../../entities/user';

@Component({
  selector: 'main-header',
  templateUrl: 'header.template.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  isAuth: boolean;
  username: string;

  constructor(
        private authService: AuthService,
        private cd: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    console.info('HeaderComponent initialised');

    this.isAuth = false;

    this.authService.authChanged
        .takeUntil(this.ngUnsubscribe)
        .subscribe((data) => {
          this.isAuth = data;
          this.cd.markForCheck();
        });

    this.authService.userInfo
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
