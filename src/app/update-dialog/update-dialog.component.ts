import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  uItem: any = []
  
  itemModel: Item = {
    itemName: '',
    itemPrice: '',
    itemDescription:'' 
  }

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    private itemService: ItemService, 
    @Inject(MAT_DIALOG_DATA) data
  ) { 
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  updateItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.updateItem(id, this.itemModel)
      .subscribe()
    this.dialogRef.close()
    window.location.reload()
  }

  getUpdateItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.getUpdateItem(id)
      .subscribe(items => {
        this.uItem.push(items)
        this.itemModel.itemName = this.uItem[0].itemName
        this.itemModel.itemPrice = this.uItem[0].itemPrice
        this.itemModel.itemDescription = this.uItem[0].itemDescription
        console.log(this.itemModel)
      })
  }

  ngOnInit() {
    this.getUpdateItem()
  }

}
