import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(email:string, password:string) {
    return this.http.post<any>
    ('localhost:4200/auth/login', {email: email, password: password})
      .pipe(map(user=> {
        if(user){
          localStorage.setItem('token', JSON.stringify(user.token))
        }
        return user
      }))
  }

  signUp(email:string, password:string, firstname:string, lastname:string) {
    return this.http.post<any>
    ('localhost:4200/auth/signup', {email: email, password: password, firstname: firstname, lastname: lastname})
      .pipe(map(user=> {
        if(user){
          localStorage.setItem('token', JSON.stringify(user.token))
        }
        return user
      }))
  }
}
