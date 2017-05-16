import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CoreModule } from './core';
import { CoursesModule } from './pages/courses/courses.module';
import { EditCourseModule } from './pages/edit-course/edit-course.module';
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
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    routes,
    CoursesModule,
    EditCourseModule,
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
