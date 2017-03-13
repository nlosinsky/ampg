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

    id = 1;
    shortDescription = '';
    duration = '';
    name = '';
    date = new Date();
    type = '';

    constructor() {
    }

    ngOnInit() {
        this.id = this.courseItem.id;
        this.shortDescription = this.courseItem.shortDescription;
        this.duration = this.courseItem.duration;
        this.date = this.courseItem.date;
        this.name = this.courseItem.name;
        this.type = this.courseItem.type;

        console.info('CourseComponent initialised');
    }

    deleteCourseItem(id: number) :void {
        this.deleteItem.emit({ id });
    }
}
