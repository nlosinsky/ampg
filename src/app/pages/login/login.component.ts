import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('LoginComponent initialised');
    }
}
