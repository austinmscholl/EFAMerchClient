import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  items: Object;

  constructor(private itemService: ItemService, private cartService:CartService) { }

  checkCategory() {
    if (!sessionStorage.getItem('category')) {
      this.itemService.getItemsGender('male').subscribe(
        data => {
          console.log(data)
          this.items = data
        }
      )
    } else {
      let category = sessionStorage.getItem('category')
      // this.getNavCategory(category)
    }
  }

  ngOnInit() {
    this.checkCategory()
  }

  // getNavCategory(category) {
  //   this.itemService.getCategory('male', category)
  //     .subscribe(items => this.items = items)
  //   console.log(category)
  //   sessionStorage.removeItem('category')
  // }


  getCategory(event) {
    console.log(event.target.id)
    this.itemService.getCategory('male', event.target.id)

      .subscribe(items => this.items=items)
  }

  getAccessories(){
    this.itemService.getAccessories()
      .subscribe(items => this.items=items)
  }

  addCart(event){
    this.cartService.addToCart(event.target.id)
      .subscribe()
    // window.location.reload()
  }

}
