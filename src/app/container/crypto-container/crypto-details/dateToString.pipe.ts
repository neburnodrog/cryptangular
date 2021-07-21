import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toHTMLString' })
export class dateToHTMLString implements PipeTransform {
  transform(timestamp: number) {
    var date = new Date(timestamp);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const dateString = date.toJSON().slice(0, 10);
    return dateString;
  }
}
