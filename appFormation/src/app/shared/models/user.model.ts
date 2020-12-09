import { RoleUser } from '../enums/role-user.enum';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  id: number;
  username: string;
  password: string;
  role: RoleUser = RoleUser.USER;

  constructor(obj? : Partial<User>)
  {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
