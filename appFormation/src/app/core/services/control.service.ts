import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  constructor() { }

  canActivate():boolean {
    if (localStorage.userConnected === 'true')
      return true;
    else
      return false;
  }
}
