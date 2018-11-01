import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.scss']
})
export class WomensComponent implements OnInit {

  items: Object;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItemsGender('female').subscribe(
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
    this.itemService.getCategory('female', event.target.id)
      .subscribe(items => this.items=items)
    // console.log(event.target.id)
  }

}
