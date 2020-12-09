import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';

const routes: Routes = [
  { path:'', component:PageUsersComponent },
  { path:'add', component:PageAddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
