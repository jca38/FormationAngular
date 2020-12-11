import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const routes: Routes = [
  { path:'', component:PageClientsComponent , data : { title : 'Clients', subtitle :'Liste des clients'} },
  { path:'add', component:PageAddClientComponent , data : { title : 'Clients', subtitle :'Ajout client'} },
  { path:'edit/:id', component:PageEditClientComponent , data : { title : 'Clients', subtitle :'Modification client'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
