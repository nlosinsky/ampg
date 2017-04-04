import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let str = '';
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours) {
      str += `${hours}h `;
    }

    str += `${minutes}min`;

    return str;
  }
}
