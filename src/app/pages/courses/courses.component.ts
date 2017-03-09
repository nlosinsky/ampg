import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {CourseItem} from '../../core/entities';

@Component({
    selector: 'courses',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'courses.template.html'
})

export class CoursesComponent implements OnInit {
    private coursesList: CourseItem[];

    constructor() {
        this.coursesList = [];
    }

    ngOnInit() {
        console.info('CoursesComponent initialised');

        this.coursesList = [
            {
                id: 1,
                shortDescription: 'Lorem desc1',
                duration: '1h 28min',
                date: new Date(),
                name: 'Video course',
                type: 'video',
            },
            {
                id: 2,
                shortDescription: 'Lorem desc2',
                duration: '17min',
                date: new Date(),
                name: 'Video course',
                type: 'video',
            },
            {
                id: 3,
                shortDescription: 'Lorem desc3',
                duration: '2h 15min',
                date: new Date(),
                name: 'Video course',
                type: 'video',
            }
        ]
    }
}
