import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  state= StateClient.Active; // par défaut
  tva = 20; // pardéaut
  name: string;
  ca: number;
  comment: string;

  total(): number {
    return this.ca * (1 + this.tva/100);
    //throw new Error('Method not implemented.');
  }

  constructor(obj? : Partial<Client>)
  {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
