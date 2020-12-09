import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';


@NgModule({
  declarations: [PageListOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    IconModule
  ]
})
export class OrderModule { }
