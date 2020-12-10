import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [PageUsersComponent, PageAddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    TemplatesModule
  ]
})
export class UsersModule { }
