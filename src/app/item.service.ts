import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  token = sessionStorage.getItem('token')

  httpOptions = { headers: new HttpHeaders({
    'Authorization': this.token,
    'Content-Type': 'application/json'
  })}

  constructor(private http: HttpClient) { }

  createItems (item: any, image:any){
    // console.log(image)

    // console.log(item.itemImg.file_name)
    let formData: FormData = new FormData()
    formData.append('itemName', item.itemName)
    formData.append('itemPrice', item.itemPrice)
    formData.append('category', item.itemCategory)
    formData.append('gender', item.gender)
    formData.append('itemDescription', item.itemDescription)
    formData.append('itemImg', image)
   
    
    return this.http.post<any>('http://localhost:5000/item/additem', formData)
      .subscribe(response => console.log(response))
  }


  getItems() {
    return this.http.get('http://localhost:5000/item/getitems')
  }

  deleteItem(id){
    console.log('delete service hit', id)
    return this.http.delete(`http://localhost:5000/item/${id}`, this.httpOptions)
  }

  updateItem(id){
    console.log('update service hit', id)
    return this.http.put(`http://localhost:5000/item/${id}`, this.httpOptions )
  }

  getItemsGender(gender){
    return this.http.get(`http://localhost:5000/item/${gender}`)
  }

  getCategory(gender, category){
    console.log(gender, category)
    return this.http.get(`http://localhost:5000/item/${gender}/${category}`)
  }

  getAccessories(){
    return this.http.get('http://localhost:5000/item/getaccessories')
  }

}
