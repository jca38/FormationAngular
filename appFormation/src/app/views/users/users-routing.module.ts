import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';

const routes: Routes = [
  { path:'', component:PageUsersComponent , data : { title : 'Users', subtitle :'Liste des users'} },
  { path:'add', component:PageAddUserComponent , data : { title : 'Users', subtitle :'Ajout user'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
