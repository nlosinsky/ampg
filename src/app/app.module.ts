import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {CoursesComponent} from './pages/courses/courses.component';

import {routes} from './app.routes';
import { FooterModule } from './core/components/footer/footer.module';
import {HeaderModule} from "./core/components/header/header.module";

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        routes,
        FooterModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
