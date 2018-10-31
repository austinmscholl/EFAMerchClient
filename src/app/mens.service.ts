import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensService {

  itemsUrl = 'http://localhost:5000/item/getitems';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.itemsUrl);
  }
}
