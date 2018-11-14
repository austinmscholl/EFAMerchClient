import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
import { CartstockDialogComponent } from '../dialogs/cartstock-dialog/cartstock-dialog.component'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  items: Object;

  constructor(private itemService: ItemService, private cartService:CartService, private dialog: MatDialog) { }

  openCartstockDialog(event):void {
    sessionStorage.setItem('itemId', event.target.id)
    let token = sessionStorage.getItem('token')
    if(token){
      const dialogRef = this.dialog.open(CartstockDialogComponent)
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('the cart stock dialog closed')
      })
    } else{ 
      alert('You need to login/register to buy items')
    }
  }

  ngOnInit() {
    this.itemService.getItemsGender('male').subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }

  getCategory(event) {
    console.log(event.target.id)
    this.itemService.getCategory('male', event.target.id)

      .subscribe(items => this.items=items)
  }

  getAccessories(){
    this.itemService.getAccessories()
      .subscribe(items => this.items=items)
  }

  

}
