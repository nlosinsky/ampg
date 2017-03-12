import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'course-details',
    templateUrl: 'course-details.template.html'
})

export class CourseDetailsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.info('CourseDetailsComponent initialised');
    }
}
