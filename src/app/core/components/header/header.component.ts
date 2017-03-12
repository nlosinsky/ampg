import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: 'header.template.html',
    styles: [require('./header.component.scss')],
})

export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('HeaderComponent initialised');
    }
}
