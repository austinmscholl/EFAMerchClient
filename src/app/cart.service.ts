import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  additem(itemId, cartId, cartstock){
    console.log(itemId, cartId, cartstock)
    return this.http.post<any>(`${APIURL}/cartitem/${cartId}/${itemId}`, {
      size: cartstock.size,
      quantity: cartstock.quantity
    }, this.httpOptions)
  }

  getCart():Observable<any>{
    return this.http.get<any>(`${APIURL}/cart`, this.httpOptions)
  }

  deleteItem(id){
    console.log('delete item/cart hit', id)
    return this.http.delete(`${APIURL}/cart/delete/${id}`, this.httpOptions)
  }
  
}
