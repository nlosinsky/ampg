import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoursesModule {
    constructor() {
    }
}