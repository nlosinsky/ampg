import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'course-details',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'course-details.template.html'
})

export class CourseDetailsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('CourseDetailsComponent initialised');
    }
}
