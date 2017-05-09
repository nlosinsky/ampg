import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course.component';
import { CoreModule } from '../../core';


@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AddCourseComponent
  ],
  exports: [
    AddCourseComponent
  ]
})
export class AddCourseModule {
  constructor() {
  }
}
