import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-footer',
    templateUrl: 'footer.template.html',
    styleUrls: ['footer.component.scss'],
})

export class FooterComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('FooterComponent initialised');
    }
}
