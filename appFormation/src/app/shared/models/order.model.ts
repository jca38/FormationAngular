import { StateOrder } from '../enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  id: number;
  tjmHT = 500; // par défaut
  nbJours = 1; // par défaut
  tva = 20; // par défaut
  state = StateOrder.OPTION; // par défaut
  typePresta: string;
  client: string;
  comment: string;

  totalHT(): number {
    return this.tjmHT*this.nbJours;
    //throw new Error('Method not implemented.');
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva/100);
    //throw new Error('Method not implemented.');
  }

  constructor(obj? : Partial<Order>)
  {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
