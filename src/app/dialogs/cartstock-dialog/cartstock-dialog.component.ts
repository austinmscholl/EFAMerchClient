import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { CartService } from '../../cart.service'
import { ItemService } from '../../item.service'
import { Cartstock } from '../../models/cartstock'

@Component({
  selector: 'app-cartstock-dialog',
  templateUrl: './cartstock-dialog.component.html',
  styleUrls: ['./cartstock-dialog.component.scss']
})
export class CartstockDialogComponent implements OnInit {

  item: Object

  cartstock: Cartstock = {
    quantity:null,
    size: null
  }

  constructor(private cartService: CartService, private itemService: ItemService, public dialogRef: MatDialogRef<CartstockDialogComponent>) { }

  onNoClick(){
    this.dialogRef.close()
  }

  async cartStock(){
    let itemId = sessionStorage.getItem('itemId')
    await this.addCart(itemId)
    this.cartService.addCartstock(itemId, this.cartstock)
      .subscribe()
    // console.log(itemId, this.cartstock)

    this.onNoClick()
  }

  ngOnInit() {
    let itemId = sessionStorage.getItem('itemId')
    this.itemService.getUpdateItem(itemId)
      .subscribe(item => this.item = item)
  }

  addCart(id){
    this.cartService.addToCart(id)
      .subscribe()
  }

}
