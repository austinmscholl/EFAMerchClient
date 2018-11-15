import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { APIURL } from '../environments/environment.prod'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  constructor(private http: HttpClient) { }

  getCartItem(id): Observable<any>{
    return this.http.get(`${APIURL}/cartitem/getcartitem/${id}`)
  }

  updateCartItem(id, stock){
    return this.http.put(`${APIURL}/cartitem/update/${id}`, {
      size: stock.size,
      quantity: stock.quantity
    })
  }
}
