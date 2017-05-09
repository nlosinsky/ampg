import { NgModule } from '@angular/core';

import { EditCourseComponent } from './edit-course.component';
import { AddCourseModule } from '../add-course/add-course.module';

@NgModule({
  imports: [
    AddCourseModule
  ],
  declarations: [
    EditCourseComponent
  ]
})
export class EditCourseModule {
  constructor() {
  }
}
