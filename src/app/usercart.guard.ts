import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsercartGuard implements CanActivate {

  // checks if there is currently a token in sessionStorage
  // if true, returns true, drops the guard
  // if false, keeps the guard activated
  getToken (){
    let token = sessionStorage.getItem('token')
    if(!token){
      return false
    } else {
      return true
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getToken()
  }
}
