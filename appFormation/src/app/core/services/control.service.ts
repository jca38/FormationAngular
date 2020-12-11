import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  constructor(private router:Router,
              private userService:UserService) { }

  canActivate():boolean {
    if (this.userService.getUserId()) {
      // console.log("connecté !");
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
