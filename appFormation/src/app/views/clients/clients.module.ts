import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';


@NgModule({
  declarations: [PageClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    IconModule
  ]
})
export class ClientsModule { }
