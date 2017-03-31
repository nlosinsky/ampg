import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseItem } from '../../core/entities';

@Injectable()
export class CoursesService {
  private courses: CourseItem[] = [
    {
      id: 1,
      shortDescription: 'Lorem desc1',
      duration: '1h 28min',
      date: new Date(),
      name: 'Video course',
      type: 'video',
    },
    {
      id: 2,
      shortDescription: 'Lorem desc2',
      duration: '17min',
      date: new Date(),
      name: 'Video course',
      type: 'video',
    },
    {
      id: 3,
      shortDescription: 'Lorem desc3',
      duration: '2h 15min',
      date: new Date(),
      name: 'Video course',
      type: 'video',
    }
  ];

  constructor() {}

  getList(): Observable<CourseItem[]> {
    return Observable.of(this.courses);
  }

  createCourse(course: CourseItem): void {
    this.courses.push(course);
  }

  getItemById(id: number) {
    const item = this.courses.find(el => el.id === id);

    return Observable.of(item);
  }

  updateItem(course: CourseItem): void {
    const index = this.courses.findIndex(el => el.id === course.id);

    this.courses[index] = course;
  }

  removeItem(id: number): void {
    const index = this.courses.findIndex(el => el.id === id);

    this.courses.splice(index, 1);
  }
}
