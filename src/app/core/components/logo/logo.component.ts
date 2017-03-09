import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'logo',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'logo.template.html'
})

export class LogoComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('LogoComponent initialised');
    }
}
