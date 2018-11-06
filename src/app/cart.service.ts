import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  token = sessionStorage.getItem('token')
  
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }
  

  addToCart(id){
    return this.http.put<any>(`http://localhost:5000/cart/${id}`, {} , this.httpOptions)
      .pipe(cart => cart)
    // console.log(id)
  }

  getCart(){
    return this.http.get<any>('http://localhost:5000/cart', this.httpOptions)
  }
  
}
