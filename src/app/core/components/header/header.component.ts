import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services';
import { Subscription } from 'rxjs';
import { User } from '../../entities/user';

@Component({
  selector: 'main-header',
  templateUrl: 'header.template.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  private authSubscriptions: Subscription[] = [];

  isAuth: boolean;
  username: string;

  constructor(
        private authService: AuthService,
        private cd: ChangeDetectorRef
    ) {
    this.isAuth = false;
  }

  ngOnInit(): void {
    console.info('HeaderComponent initialised');

    this.authSubscriptions.push(
        this.authService.authChanged.subscribe((data) => {
          this.isAuth = data;
          this.cd.markForCheck();
        })
    );

    this.authSubscriptions.push(
        this.authService.userInfo.subscribe(({ login }: User) => this.username = login)
    );
  }

  ngOnDestroy(): void {
    this.authSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  logout(): void {
    this.authService.logout();
  }
}
