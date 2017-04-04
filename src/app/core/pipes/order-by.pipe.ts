import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../entities/courseItem';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: CourseItem[], field: string): CourseItem[] {
    return arr.sort((a: CourseItem, b: CourseItem): number => b[field].getTime() - a[field].getTime());
  }
}
