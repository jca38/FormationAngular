import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value)
    {
      if (args[0] === "TTC") {
        return value.totalTTC();
      }
      return value.totalHT();
    }
  }

}
