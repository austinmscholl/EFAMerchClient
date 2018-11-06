import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // items: Object
  itemArr = []

  totalNum = 0

  constructor(private cartService: CartService) { }

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
}
