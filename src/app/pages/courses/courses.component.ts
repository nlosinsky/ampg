import { Component, OnInit } from '@angular/core';

import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: 'courses.template.html'
})

export class CoursesComponent implements OnInit {
    private coursesList: CourseItem[];

    constructor(
        private coursesSvc: CoursesService
    ) {
        this.coursesList = [];
    }

    ngOnInit() {
        console.info('CoursesComponent initialised');

        this.coursesList = this.coursesSvc.getList();
    }

    onDeleteItem(event): void  {
        this.coursesSvc.removeItem(event.id);
    }
}
