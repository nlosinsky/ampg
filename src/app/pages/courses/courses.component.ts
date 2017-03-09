import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'courses',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'courses.template.html'
})

export class CoursesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('CoursesComponent initialised');
    }
}
