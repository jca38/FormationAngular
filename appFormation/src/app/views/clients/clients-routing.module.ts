import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const routes: Routes = [
  { path:'', component:PageClientsComponent },
  { path:'add', component:PageAddClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
