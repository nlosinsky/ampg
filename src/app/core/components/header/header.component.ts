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
  private authSubscriptions: Subscription[];

  isAuth: boolean;
  username: string;

  constructor(
        private auth: AuthService,
        private cd: ChangeDetectorRef
    ) {
    this.isAuth = false;
  }

  ngOnInit() {
    console.info('HeaderComponent initialised');

    this.authSubscriptions.push(
        this.auth.authChanged.subscribe((data) => {
          this.isAuth = data;
          this.cd.markForCheck();
        })
    );

    this.authSubscriptions.push(
        this.auth.userInfo.subscribe(({ login }: User) => this.username = login)
    );
  }

  ngOnDestroy() {
    this.authSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  logout(): void {
    this.auth.logout();
  }
}
