import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {
  role:string =  sessionStorage.getItem('admin')
  
  getRole(){
    if(this.role === 'admin'){
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
