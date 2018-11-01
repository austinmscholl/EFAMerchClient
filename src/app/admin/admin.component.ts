import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'

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
    this.itemService.getAllItems()
      .subscribe(items => this.item.push(items))

      console.log(this.item)
  }

}
