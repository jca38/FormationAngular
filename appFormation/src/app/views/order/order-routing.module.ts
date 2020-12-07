import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';

const routes: Routes = [
  { path:'', component:PageListOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
