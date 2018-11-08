import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../../item.service'

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: './add-stock-dialog.component.html',
  styleUrls: ['./add-stock-dialog.component.scss']
})
export class AddInventoryDialogComponent implements OnInit {

  stock: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddInventoryDialogComponent>,
    private fb: FormBuilder,
    private itemService: ItemService
  ) { }


  onNoClick():void{
    this.dialogRef.close()
  }
  ngOnInit() {
    this.stock = this.fb.group({
      size: new FormControl(),
      quantity: new FormControl()
    })
  }

  onSubmit(){
    let itemId = sessionStorage.getItem('itemId')
    this.itemService.createStock(itemId, this.stock.value)
      .subscribe()
    this.dialogRef.close()
  }

}
