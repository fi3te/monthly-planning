import { Pipe, PipeTransform } from '@angular/core';
import { formatMonth } from '../../models/month';
import { MonthYear } from '../../models/month-year';

@Pipe({
  name: 'monthYear'
})
export class MonthYearPipe implements PipeTransform {

  transform(value: MonthYear): string {
    return `${formatMonth(value.month)} / ${value.year}`;
  }
}
