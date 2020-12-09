import { StateUser } from '../enums/state-user.enum';

export interface UserI {
  id:number;
  username:string;
  password:string;
  role:StateUser;
}
