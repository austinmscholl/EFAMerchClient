import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user'
import { AuthService } from './auth.service' 

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

  getRole(){
    if(JSON.parse(sessionStorage.getItem('admin'))){
      return true
    } else {
      return false
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getRole()
  }
}
