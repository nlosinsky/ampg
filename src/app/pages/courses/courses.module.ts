import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoreModule } from '../../core';
import { CoursesService } from './courses.service';
import { ConfirmModalComponent } from '../../core/components/confirm-modal';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  providers: [
    CoursesService
  ],
  entryComponents:[
    ConfirmModalComponent
  ]
})
export class CoursesModule {
  constructor() {
  }
}
