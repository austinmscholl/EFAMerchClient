import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {
  // sets role to the role of the user; either 'admin' or 'user'
  role:string =  sessionStorage.getItem('admin')
  
  // checks if the current user's role is 'admin'
  // if true, drops the guard
  // if false, keeps the guard activated
  getRole(){
    if(this.role === 'admin'){
      return true
    } else {
      return false
    }
  }

  // must return a boolean
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getRole()
  }
}
