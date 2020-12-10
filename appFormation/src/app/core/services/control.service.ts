import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  constructor(private router:Router) { }

  canActivate():boolean {
    if (localStorage.userConnected === 'true') {
      console.log("connecté !");
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
