import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
  transform(value: string, limit = 10): any {
    if (value.length > limit) {
      return value.substr(0, 10) + '...';
    }

    return value;
  }
}
