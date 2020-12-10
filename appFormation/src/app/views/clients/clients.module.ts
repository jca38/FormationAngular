import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TextsModule } from 'src/app/texts/texts.module';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageClientsComponent, FormAddClientComponent, PageAddClientComponent],
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
