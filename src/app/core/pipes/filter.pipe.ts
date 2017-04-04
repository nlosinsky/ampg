import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../entities/courseItem';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: CourseItem[], query: string): CourseItem[] {
    if (query) {
      return arr.filter(val => val.name.toLowerCase().indexOf(query) !== -1);
    }

    return arr;
  }
}
