import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CoreModule } from './core';
import { CoursesModule } from './pages/courses/courses.module';
import { EditCourseModule } from './pages/edit-course/edit-course.module';
import { AddCourseModule } from './pages/add-course/add-course.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginModule } from './pages/login/login.module';
import { rootReducer } from './core/store';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
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
    NgbModule.forRoot(),
    StoreModule.provideStore(rootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
