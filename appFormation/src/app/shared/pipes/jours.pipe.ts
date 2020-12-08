import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'jours'
})
export class JoursPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): string {
    if (value.nbJours>1)
      return `${value.nbJours} jours`;
    return `${value.nbJours} jour`;
  }
}
