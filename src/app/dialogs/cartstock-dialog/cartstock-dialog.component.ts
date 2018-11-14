import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { CartService } from '../../cart.service'
import { ItemService } from '../../item.service'
import { Cartstock } from '../../models/cartstock'

import { AuthService } from '../../auth.service'


@Component({
  selector: 'app-cartstock-dialog',
  templateUrl: './cartstock-dialog.component.html',
  styleUrls: ['./cartstock-dialog.component.scss']
})
export class CartstockDialogComponent implements OnInit {

  user:any


  cartstock: Cartstock = {
    quantity:null,
    size: null
  }


  constructor(private cartService: CartService, private itemService: ItemService, public dialogRef: MatDialogRef<CartstockDialogComponent>, public authService: AuthService) { }


  onNoClick(){
    this.dialogRef.close()
  }


 addCart(){
   let itemId = sessionStorage.getItem('itemId')
   let cartId = this.user.cart.id
  //  console.log(cartId)
    this.cartService.additem(itemId, cartId, this.cartstock)
      .subscribe()
    this.dialogRef.close()
  }


  ngOnInit() {
    this.authService.findUser()
    .subscribe(user => this.user = user)
  }

  


}
