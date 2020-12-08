import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id:number;
  state:StateClient;
  tva:number;
  name:string;
  ca:number;
  comment:string;

  total():number;
}
