import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material';
import { DeleteCartitemDialogComponent } from '../dialogs/delete-cartitem-dialog/delete-cartitem-dialog.component';
import { UpdateInventoryDialogComponent } from '../dialogs/update-inventory-dialog/update-inventory-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:any

  totalNum = 0

  constructor(
    private cartService: CartService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getCart()
  }

  total(){
    for(let item of this.cart.items){
      this.totalNum += (parseInt(item.itemPrice)*item.cartitem.quantity)
    }
    // console.log(this.itemArr)
  }

  getCart(){
    this.cartService.getCart()
      .subscribe(cart =>{
        this.cart = cart
        console.log(cart)
        this.total()
      })

  }

  openUpdateStockDialog(event):void{
    sessionStorage.setItem('cartItemId', event.target.id)

    const dialogRef = this.dialog.open(UpdateInventoryDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update dialog was closed')
    })
  }

  openDeleteCartItemDialog(event): void {
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(DeleteCartitemDialogComponent, {
      width: '250px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
    });
  }

  handleQuantityChange(selectValue){
    console.log('hit', selectValue.target.value)
  }
}
