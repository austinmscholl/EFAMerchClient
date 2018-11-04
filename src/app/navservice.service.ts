import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {

  constructor(private http: HttpClient) { }

  getMCategory(gender, category){
    console.log(gender, category)
    return this.http.get(`http://localhost:5000/item/${gender}/${category}`)
  }

  getWCategory(gender, category){
    return this.http.get(`http://localhost:5000/item/${gender}/${category}`)
  }
}
