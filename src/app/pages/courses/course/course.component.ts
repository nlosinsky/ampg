import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import {CourseItem} from '../../../core/entities';

@Component({
    selector: 'course',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'course.template.html',
    styles: [require('./course.component.scss')]
})

export class CourseComponent implements OnInit {
    @Input() course: CourseItem;

    constructor() {
    }

    ngOnInit() {
        console.info('CourseComponent initialised');
    }
}
