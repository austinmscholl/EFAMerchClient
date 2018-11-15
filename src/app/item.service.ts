import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './models/item';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  createItems (item: any, image:any){
    let formData: FormData = new FormData()
    formData.append('itemName', item.itemName)
    formData.append('itemPrice', item.itemPrice)
    formData.append('category', item.itemCategory)
    formData.append('gender', item.gender)
    formData.append('itemDescription', item.itemDescription)
    formData.append('itemImg', image)
    
    return this.http.post<any>(`${APIURL}/item/additem`, formData)
      .subscribe(response => {
        response
        window.location.reload()
      })
  }

  getItems() {
    return this.http.get(`${APIURL}/item/getitems`)
  }

  getOrdered(){
    return this.http.get(`${APIURL}}/ordered`)
  }

  deleteItem(id){
    console.log('delete service hit', id)
    return this.http.delete(`${APIURL}/item/${id}`)
  }

  getUpdateItem(id){
    console.log('getUpdateItem hit', id)
    return this.http.get(`${APIURL}/item/oneitem/${id}`)
  }

  updateItem(id, item){
    console.log('updateItem hit', id, item)
    return this.http.put(`${APIURL}/item/updateone/${id}`, {
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      itemDescription: item.itemDescription
    } )
  }

  getItemsGender(gender){
    return this.http.get(`${APIURL}/item/gender/${gender}`)
  }

  getCategory(gender, category){
    console.log(gender, category)
    return this.http.get(`${APIURL}/item/genderCat/${gender}/${category}`)
  }

  createStock(id, stock){
    return this.http.put(`${APIURL}/item/addstock/${id}`, {
    size:stock.size,
    quantity:stock.quantity
    })
    // console.log(id, stock)
  }

  
  getAccessories(){
    return this.http.get(`${APIURL}/item/getaccessories`)
  }

  updateInventory(id, quantity){
    return this.http.put<any>(`${APIURL}/stock/${id}`, {
      quantity: quantity
    })

    // console.log(id, quantity)
  }
}
