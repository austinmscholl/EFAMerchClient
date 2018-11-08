import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { MatDialogRef } from '@angular/material'
import { ItemService } from '../../item.service'

@Component({
  selector: 'app-update-inventory-dialog',
  templateUrl: './update-inventory-dialog.component.html',
  styleUrls: ['./update-inventory-dialog.component.scss']
})
export class UpdateInventoryDialogComponent implements OnInit {

  updateStock: FormGroup

  constructor(
    public dialogRef: MatDialogRef<UpdateInventoryDialogComponent>,
    private fb: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.updateStock = this.fb.group({
      quantity: new FormControl()
    })
  }

  onSubmit(){
    let stockId = sessionStorage.getItem('stockId')
    this.itemService.updateInventory(stockId, this.updateStock.value.quantity)
      .subscribe()
    // console.log(this.updateStock.value.quantity, stockId )
    this.dialogRef.close()
  }
}
