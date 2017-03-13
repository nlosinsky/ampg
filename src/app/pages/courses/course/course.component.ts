import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CourseItem } from '../../../core/entities';

@Component({
    selector: 'course',
    templateUrl: 'course.template.html',
    styleUrls: ['course.component.scss']
})

export class CourseComponent implements OnInit {
    @Input('course') courseItem: CourseItem;
    @Output('deleteItem') deleteItem = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        console.info('CourseComponent initialised');
    }

    deleteCourseItem(id) {
        this.deleteItem.emit({ id });
    }
}
