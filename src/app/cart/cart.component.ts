import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material';
import { DeleteCartitemDialogComponent } from '../delete-cartitem-dialog/delete-cartitem-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemArr = []

  totalNum = 0

  constructor(
    private cartService: CartService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getCart()
  }

  total(){
    for(let item of this.itemArr[0].items){
      this.totalNum += parseInt(item.itemPrice)
    }
  }

  getCart(){
    this.cartService.getCart()
      .subscribe(cart =>{
        this.itemArr.push(cart)
      })

    setTimeout(() => {
      this.total()
    }, 100)
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
}
