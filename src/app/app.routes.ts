import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoursesComponent } from './pages/courses/courses.component';
// import { HomeComponent } from './pages/home';
// import { NoContentComponent } from './pages/no-content';

const appRoutes: Routes = [
    {path: '', component: CoursesComponent},
    // {path: 'home', component: HomeComponent},
    // {path: '**', component: NoContentComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
