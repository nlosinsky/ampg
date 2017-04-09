import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CoreModule } from './core';
import { CoursesModule } from './pages/courses/courses.module';
import { CourseDetailsModule } from './pages/course-details/course-details.module';
import { AddCourseModule } from './pages/add-course/add-course.module';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    routes,
    CoursesModule,
    CourseDetailsModule,
    LoginModule,
    CoreModule,
    AddCourseModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
