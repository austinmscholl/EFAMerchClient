import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../environments/environment.prod';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  
  logIn(email:string, password:string){
    return this.http.post<User>(`${APIURL}/auth/login`, {email: email, password: password})
      .pipe(map(user => user))
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

  findUser(){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      })
    }

    return this.http.get<User>('http://localhost:5000/auth/findUser', headers)
  }

}
