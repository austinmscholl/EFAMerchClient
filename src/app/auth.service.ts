import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(email:string, password:string){
    return this.http.post<any>(`${APIURL}/auth/login`, {email: email, password: password})
      .pipe(map(user => user))
    //  console.log(email, password)
  }

  signUp(email:string, password:string, firstname:string, lastname: string){  
    console.log(firstname, lastname, email, password)
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://efamerch-client.herokuapp.com'
      })
    }
    
    return this.http.post<any>(`${APIURL}/auth/signup`, {
      email: email, 
      password: password, 
      firstname: firstname, 
      lastname: lastname}, headers)
  }

}
