import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { CartitemService } from '../../cartitem.service'
import { Cartstock } from '../../models/cartstock'

@Component({
  selector: 'app-update-inventory-dialog',
  templateUrl: './update-inventory-dialog.component.html',
  styleUrls: ['./update-inventory-dialog.component.scss']
})
export class UpdateInventoryDialogComponent implements OnInit {

  cartStock: Cartstock = {
    size: null,
    quantity: null
  }

  constructor(
    public dialogRef: MatDialogRef<UpdateInventoryDialogComponent>,
    private cartItemService: CartitemService
  ) { }

  ngOnInit() {
    let id = sessionStorage.getItem('cartItemId')
    this.cartItemService.getCartItem(id)
      .subscribe(item => {
        this.cartStock.size = item.size,
        this.cartStock.quantity = item.quantity
      })
  }

  onSubmit(){
    let cartItemId = sessionStorage.getItem('cartItemId')
    this.cartItemService.updateCartItem(cartItemId, this.cartStock)
      .subscribe()
  }
}
