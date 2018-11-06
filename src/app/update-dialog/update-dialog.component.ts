import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  uItemForm: FormGroup
  uItem: any = []

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>, private itemService: ItemService, 
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder
  ) { 
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  updateItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.updateItem(id)
      .subscribe()
  }

  getUpdateItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.getUpdateItem(id)
      .subscribe(items => console.log(items))
  }

  ngOnInit() {
    this.uItemForm = this.fb.group({
      itemName: new FormControl(),
      itemPrice: new FormControl(),
      itemDescription: new FormControl()
    })
    this.getUpdateItem()
  }

}
