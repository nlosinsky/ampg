import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { CourseItem } from '../../core/entities';
import { AppState } from '../../core/store';
import { ADD_COURSES } from '../../core/store/actions';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';

@Injectable()
export class CoursesService {
  constructor(
      private restService: RestService,
      private store: Store<AppState>
  ) {}

  addItems(start: number, count: number, phrase: string): any {
    const params = new URLSearchParams();

    params.set('start', (start - 1).toString());
    params.set('count', count.toString());
    params.set('query', phrase);

    this.restService.get(EndpointsConstant.COURSES.ALL, { search: params })
      .map((data) => {
        const courses = data.courses.map((course) => {
          const { id, shortDescription, duration, date, name, type, isTopRated, authors, longDescription } = course;

          return new CourseItem(shortDescription, duration, new Date(date), name, authors, longDescription, isTopRated, id, type);
        });

        return { courses, coursesCount: data.coursesCount };
      })
      .subscribe(payload => this.store.dispatch({ type: ADD_COURSES, payload }));
  }

  removeItem(id: number): Observable<CourseItem[]> {
    const url = EndpointsConstant.COURSES.SINGLE.replace(/:id/, id.toString());

    return this.restService.delete(url);
  }

  getItemById(id: number): Observable<CourseItem> {
    const url = EndpointsConstant.COURSES.SINGLE.replace(/:id/, id.toString());

    return this.restService.get(url);
  }

  createCourse(course: any): Observable<number> {
    const { title, description, date, duration, authors } = course;
    const courseData = new CourseItem(description, duration, date, title, authors);

    return this.restService.post(EndpointsConstant.COURSES.NEW, courseData);
  }

  updateItem(newCourseData: any, availableCourseData: CourseItem): Observable<CourseItem> {
    const { title, description, date, duration, authors } = newCourseData;
    const { id, type, isTopRated, longDescription } = availableCourseData;
    const courseData = new CourseItem(description, duration, date, title, authors, longDescription, isTopRated, id, type);
    const url = EndpointsConstant.COURSES.SINGLE.replace(/:id/, id.toString());

    return this.restService.put(url, courseData);
  }
}
