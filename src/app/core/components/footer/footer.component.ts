import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'main-footer',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'footer.template.html',
    styles: [require('./footer.component.scss')],
})

export class FooterComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('FooterComponent initialised');
    }
}
