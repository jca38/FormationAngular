import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './views/clients/pages/page-clients/page-clients.component';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageListOrderComponent } from './views/order/pages/page-list-order/page-list-order.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path:'orders', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
  { path:'clients', loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
