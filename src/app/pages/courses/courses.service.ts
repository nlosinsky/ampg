import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';

@Injectable()
export class CoursesService {
  private courses: CourseItem[];

  constructor(
      private http: RestService
  ) {}

  getList(): Observable<CourseItem[]> {
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;

    return this.http.get(EndpointsConstant.COURSES.ALL)
        .map((arr) => {
          return arr.map(({ id, shortDescription, duration, date, name, type, isTopRated }) => {
            return new CourseItem(id, shortDescription, duration, new Date(date), name, type, isTopRated);
          });
        })
        .map(item => item.filter(el => (el.date >= new Date(fourteenDaysDiff))));
  }

  createCourse(course: CourseItem): void {
  }

  getItemById(id: number): void {
  }

  updateItem(course: CourseItem): void {
    const index = this.courses.findIndex(el => el.id === course.id);

    this.courses[index] = course;
  }

  removeItem(id: number): Observable<CourseItem[]> {
    const url = [EndpointsConstant.COURSES.ALL, id].join('/');

    return this.http.delete(url);
  }
}
