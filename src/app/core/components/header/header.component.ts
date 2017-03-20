import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
    selector: 'main-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(
        private auth: AuthService
    ) {}

    ngOnInit() {
        console.info('HeaderComponent initialised');
    }

    logout(): void {
        this.auth.logout();
    }

    isAuth() {
        return this.auth.isAuthenticated()
    }
}
