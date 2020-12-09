import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlService } from './core/services/control.service';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

// ICI ON DEFINIT LES ROUTES PRINCIPALES DE L'APPLICATION, ET ON CHARGE LES SOUS-ROUTES UNIQUEMENT LORQU'ON EN A BESOIN
// donc les sous-routes /orders/... et le module OrderModule correspondant ne seront chargés que lorsque on appellera une route /orders/...
// = LAZY-LOADING pour optimiser les performances

const routes: Routes = [
  // Lazy-loading des sous-modules et de leurs routes lorsque le path correspond à l'un de ces sous-modules
  { path:'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path:'orders', canActivate: [ControlService], loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
  { path:'clients', canActivate: [ControlService], loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path:'users', canActivate: [ControlService], loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },

  // Route par défaut si aucune route passée en paramètre
  { path:'', redirectTo: '/home', pathMatch: 'full' },

  // Toutes les routes qui n'ont pas pu être traitées avec les règles au dessus arriveront ici (path='**' signifie non traitées)
  // Donc on arrivera ici pour toutes les routes incorrectes ex : /dssdgslgkmlfs
  { path:'**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
