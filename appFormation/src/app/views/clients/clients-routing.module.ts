import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddEditClientComponent } from './pages/page-add-edit-client/page-add-edit-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const routes: Routes = [
  { path:'', component:PageClientsComponent , data : { title : 'Clients', subtitle :'Liste des clients'} },
  { path:'add', component:PageAddEditClientComponent , data : { title : 'Clients', subtitle :'Ajout client'} },
  { path:'edit/:id', component:PageAddEditClientComponent , data : { title : 'Clients', subtitle :'Modification client'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
