import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.component.scss'],
})

export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('HeaderComponent initialised');
    }
}
