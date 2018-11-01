import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

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

  getItemsGender(gender){
    return this.http.get(`http://localhost:5000/item/${gender}`)
  }

  getCategory(gender, category){
    return this.http.get(`http://localhost:5000/item/${gender}/${category}`)
    // console.log(gender, category)
  }
}
