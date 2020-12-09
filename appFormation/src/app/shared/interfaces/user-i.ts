import { RoleUser } from '../enums/role-user.enum';

export interface UserI {
  id:number;
  username:string;
  password:string;
  role:RoleUser;
}
