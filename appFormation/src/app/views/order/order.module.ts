import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TextsModule } from 'src/app/texts/texts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


@NgModule({
  declarations: [PageListOrderComponent, FormAddOrderComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    IconModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
