import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>, private itemService:
    ItemService
  ) { }

  onNoClick(): void {
    this.dialogRef.close()
  }

  updateItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.updateItem(id)
      .subscribe()
  }

  ngOnInit() {
  }

}
