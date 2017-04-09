import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoursesComponent } from './pages/courses';
import { CourseDetailsComponent } from './pages/course-details';
import { AddCourseComponent } from './pages/add-course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

const appRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'course-details', component: CourseDetailsComponent },
    { path: 'add-course', component: AddCourseComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NoContentComponent },
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
