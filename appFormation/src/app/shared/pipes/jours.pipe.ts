import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jours'
})
export class JoursPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value<=1)
      return value.toString() + " jour";
    else
      return value.toString() + " jours";
  }
}
