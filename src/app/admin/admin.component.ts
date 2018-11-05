import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'
import { Item } from '../models/item'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  
  selectedFile: File
  
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    // console.log(file)
  }

  itemForm: FormGroup
  item: any = []
  toggleMen = false
  toggleWomen = false
  toggleUpdate = false
  toggleAccessories = false

  itemModel: Item = {
      itemName: '',
      itemPrice: '',
      itemDescription:'' 
    }

  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: new FormControl(),
      itemPrice: new FormControl(),
      itemDescription: new FormControl(),
      itemCategory: new FormControl(),
      gender: new FormControl(),
      itemImg: new FormControl(),
    })
    this.getItems()
  }

  submitForm(){
    this.itemService.createItems(this.itemForm.value, this.selectedFile)
    // console.log(this.selectedFile)
  }

  getItems(){
    this.itemService.getItems()
      .subscribe(items => this.item.push(items))

      console.log(this.item)
  }

  updateItem(event){
    console.log(this.itemModel)
  }

  deleteItem(event){
    console.log(event.target.id)
    this.itemService.deleteItem(event.target.id)
      .subscribe()
      window.location.reload()
  }

  toggleU(){
    if(this.toggleUpdate === false){
      this.toggleUpdate = true
    } else {
      this.toggleUpdate = false
    }
  }

  toggleM(){
    if(this.toggleMen === false){
      this.toggleMen = true
    } else{
      this.toggleMen = false
    }
  }

  toggleW(){
    if(this.toggleWomen === false){
      this.toggleWomen = true
    } else{
      this.toggleWomen = false
    }
  }

  toggleA(){
    if(this.toggleAccessories === false){
      this.toggleAccessories = true
    } else{
      this.toggleAccessories = false
    }
  }

}
