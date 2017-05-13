import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
  CoursesComponent,
  EditCourseComponent,
  AddCourseComponent,
  LoginComponent,
  PageNotFoundComponent
} from './pages';
import { AuthGuard } from './core/guards';

const appRoutes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'new',
        component: AddCourseComponent,
      },
      {
        path: ':id',
        component: EditCourseComponent,
        data: {
          breadcrumb: {
            label: 'Course',
            pathParam: 'id'
          }
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
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
