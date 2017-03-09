import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('LoginComponent initialised');
    }
}
