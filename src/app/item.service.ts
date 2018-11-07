import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './models/item';

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
    
    return this.http.post<any>('http://localhost:5000/item/additem', formData)
      .subscribe(response => response)
  }

  getItems() {
    return this.http.get('http://localhost:5000/item/getitems')
  }

  deleteItem(id){
    console.log('delete service hit', id)
    return this.http.delete(`http://localhost:5000/item/${id}`)
  }

  getUpdateItem(id){
    console.log('getUpdateItem hit', id)
    return this.http.get(`http://localhost:5000/item/oneitem/${id}`)
  }

  updateItem(id, item){
    console.log('updateItem hit', id, item)
    return this.http.put(`http://localhost:5000/item/updateone/${id}`, {
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      itemDescription: item.itemDescription
    } )
  }

  getItemsGender(gender){
    return this.http.get(`http://localhost:5000/item/gender/${gender}`)
  }

  getCategory(gender, category){
    console.log(gender, category)
    return this.http.get(`http://localhost:5000/item/${gender}/${category}`)
  }

  createStock(id, stock){
    return this.http.put(`http://localhost:5000/item/addstock/${id}`, {
    size:stock.size,
    quantity:stock.quantity
    })
    // console.log(id, stock)
  }

  
  getAccessories(){
    return this.http.get('http://localhost:5000/item/getaccessories')
  }

  updateInventory(id, quantity){
    return this.http.put<any>(`http://localhost:5000/stock/${id}`, {
      quantity: quantity
    })

    // console.log(id, quantity)
  }
}
