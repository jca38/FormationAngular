import { StateUser } from '../enums/state-user.enum';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  id: number;
  username: string;
  password: string;
  role: StateUser = StateUser.USER;

  constructor(obj? : Partial<User>)
  {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
