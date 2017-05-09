import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit-course';
import { AddCourseComponent } from './pages/add-course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

const appRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'edit-course/:id', component: EditCourseComponent },
    { path: 'add-course', component: AddCourseComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NoContentComponent },
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
