import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TextsModule } from 'src/app/texts/texts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddEditClientComponent } from './components/form-add-edit-client/form-add-edit-client.component';
import { PageAddEditClientComponent } from './pages/page-add-edit-client/page-add-edit-client.component';


@NgModule({
  declarations: [PageClientsComponent, FormAddEditClientComponent, PageAddEditClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    IconModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
