import { NgModule } from '@angular/core';
import { AddCourseComponent } from './add-course.component';
import { CoreModule } from '../../core';


@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    AddCourseComponent
  ]
})
export class AddCourseModule {
  constructor() {
  }
}
