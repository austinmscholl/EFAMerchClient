import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Cart } from './models/cart'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  token = sessionStorage.getItem('token')

  addToCart(id){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.put<any>(`http://localhost:5000/cart/${id}`, {} , httpOptions)
      .pipe(cart => cart)
    // console.log(id)
  }
  
}
