import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  items: Object;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItemsGender('male').subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )

  }

  addToCart(event) {
    setTimeout(() => {
      console.log(event.target.id)
    }
    ), 3000
  }

  getCategory(event) {
    this.itemService.getCategory('male', event.target.id)
      .subscribe(items => this.items=items)
  }

}
