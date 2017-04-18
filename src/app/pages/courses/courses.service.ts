import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';

@Injectable()
export class CoursesService {
  private courses: CourseItem[];

  constructor(
      private restService: RestService
  ) {}

  getList(start: number, count: number, phrase: string): Observable<{courses: CourseItem[], coursesCount: number}> {
    const params = new URLSearchParams();

    params.set('start', (start - 1).toString());
    params.set('count', count.toString());
    params.set('query', phrase);

    return this.restService.get(EndpointsConstant.COURSES.ALL, { search: params })
      .map((data) => {
        const courses = data.courses.map(({ id, shortDescription, duration, date, name, type, isTopRated }) => {
          return new CourseItem(id, shortDescription, duration, new Date(date), name, type, isTopRated);
        });

        return { courses, coursesCount: data.coursesCount };
      });
  }

  removeItem(id: number): Observable<CourseItem[]> {
    const url = [EndpointsConstant.COURSES.ALL, id].join('/');

    return this.restService.delete(url);
  }

  createCourse(course: CourseItem): void {
  }

  getItemById(id: number): void {
  }

  updateItem(course: CourseItem): void {
  }
}
