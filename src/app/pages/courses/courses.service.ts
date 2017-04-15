import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseItem } from '../../core/entities';

@Injectable()
export class CoursesService {
  private fakeCourses: any[] = [
    {
      id: 1,
      shortDescription: 'Lorem desc1',
      duration: 88,
      createdDate: new Date(2017, 4, 3),
      name: 'First video course',
      type: 'video',
      isTopRated: false
    },
    {
      id: 2,
      shortDescription: 'Lorem desc2',
      duration: 17,
      createdDate: new Date(2017, 3, 3),
      name: 'Second video course',
      type: 'video',
      isTopRated: true
    },
    {
      id: 3,
      shortDescription: 'Lorem desc3',
      duration: 135,
      createdDate: new Date(2017, 1, 1),
      name: 'Third video course',
      type: 'video',
      isTopRated: false
    }
  ];
  private courses: CourseItem[];

  constructor() {}

  getList(): Observable<CourseItem[]> {
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;

    Observable.of(this.fakeCourses)
        .map((arr) => {
          return arr.map(({ id, shortDescription, duration, createdDate, name, type, isTopRated }) => {
            return new CourseItem(id, shortDescription, duration, createdDate, name, type, isTopRated);
          });
        })
        .map(item => item.filter(el => (el.date >= new Date(fourteenDaysDiff))))
        .subscribe((el: CourseItem[]) => this.courses = el);

    return Observable.of(this.courses);
  }

  createCourse(course: CourseItem): void {
    this.courses.push(course);
  }

  getItemById(id: number): Observable<CourseItem> {
    const item = this.courses.find(el => el.id === id);

    return Observable.of(item);
  }

  updateItem(course: CourseItem): void {
    const index = this.courses.findIndex(el => el.id === course.id);

    this.courses[index] = course;
  }

  removeItem(id: number): Observable<CourseItem[]> {
    const index = this.courses.findIndex(el => el.id === id);

    this.courses.splice(index, 1);

    return Observable.of(this.courses).delay(1000);
  }
}
