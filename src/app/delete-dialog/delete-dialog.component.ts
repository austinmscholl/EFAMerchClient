import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>, private itemService: ItemService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteItem(){
    let id = sessionStorage.getItem('itemId')
    this.itemService.deleteItem(id)
      .subscribe()
      window.location.reload()
  }

  ngOnInit() {
  }

}
