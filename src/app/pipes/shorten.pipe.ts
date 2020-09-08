import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
  transform(value: string): any {
    if (value.length > 0) {
      return value.substr(0, 10) + '...';
    }

    return value;
  }
}
