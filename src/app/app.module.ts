import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';

import {routes} from './app.routes';
import { FooterModule } from './core/components/footer/footer.module';
import {HeaderModule} from "./core/components/header/header.module";
import {CoursesModule} from "./pages/courses/courses.module";
import {CourseDetailsModule} from "./pages/course-details/course-details.module";
import {NoContentComponent} from "./pages/no-content/no-content.component";
import {LoginModule} from "./pages/login/login.module";

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
        FooterModule,
        HeaderModule,
        CoursesModule,
        CourseDetailsModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
