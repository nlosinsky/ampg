import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit-course';
import { AddCourseComponent } from './pages/add-course';
import { LoginComponent } from './pages/login';
import { NotFoundComponent } from './pages/not-found';

const appRoutes: Routes = [
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'new',
        component: AddCourseComponent
      },
      {
        path: ':id',
        component: EditCourseComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
