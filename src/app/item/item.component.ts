import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  selectedFile: File
  
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    // console.log(file)
  }


  itemForm: FormGroup
  item: Object

  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: new FormControl(),
      itemPrice: new FormControl(),
      itemDescription: new FormControl(),
      itemCategory: new FormControl(),
      itemImg: new FormControl(),
    })
  }

  submitForm(){
    this.itemService.createItems(this.itemForm.value, this.selectedFile)
    // console.log(this.selectedFile)
  }

}
