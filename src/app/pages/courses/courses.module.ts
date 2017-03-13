import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoreModule } from '../../core';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CoreModule
    ]
})
export class CoursesModule {
    constructor() {
    }
}