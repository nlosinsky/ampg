import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ToolboxComponent } from '../../core/components';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent,
        ToolboxComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CoursesModule {
    constructor() {
    }
}