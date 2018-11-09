import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartstockDialogComponent } from '../dialogs/cartstock-dialog/cartstock-dialog.component'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.scss']
})
export class WomensComponent implements OnInit {

  items: Object;

  constructor(private itemService: ItemService,
    private dialog: MatDialog) { }

  openCartstockDialog(event):void {
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(CartstockDialogComponent)
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('the cart stock dialog closed')
    })
  }

  ngOnInit() {
    this.itemService.getItemsGender('female').subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )

  }


  getCategory(event) {
    this.itemService.getCategory('female', event.target.id)
      .subscribe(items => this.items=items)
    // console.log(event.target.id)
  }

  getAccessories(){
    this.itemService.getAccessories()
      .subscribe(items => this.items = items)
  }

}
