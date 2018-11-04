import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Object
  itemArr = []

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart()
  }


  getCart(){
    this.cartService.getCart()
      .subscribe(cart =>this.items = cart)
  }
}
