import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-delete-cartitem-dialog',
  templateUrl: './delete-cartitem-dialog.component.html',
  styleUrls: ['./delete-cartitem-dialog.component.scss']
})
export class DeleteCartitemDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCartitemDialogComponent>,
    private cartService: CartService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteItemCart(){
    let id = sessionStorage.getItem('itemId')
    console.log(id)
    this.cartService.deleteItem(id)
      .pipe()
      .subscribe()
      window.location.reload()
  }

  ngOnInit() {
  }

}
