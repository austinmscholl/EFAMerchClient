import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from "../environments/environment.prod";

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
    return this.http.put<any>(`${APIURL}/cart/${id}`, {} , this.httpOptions)
      .pipe(cart => cart)
    console.log(id)
  }

  addCartstock(id, stock){
    return this.http.put<any>(`${APIURL}/cart/addstock/${id}`, {
      quantity:stock.quantity,
      size: stock.size
    } , this.httpOptions)
    .pipe(cart => cart)
  }

  getCart(){
    return this.http.get<any>(`${APIURL}/cart`, this.httpOptions)
  }

  deleteItem(id){
    console.log('delete item/cart hit', id)
    return this.http.delete(`${APIURL}/cart/delete/${id}`, this.httpOptions)
  }
  
}
