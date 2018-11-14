import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { AddInventoryDialogComponent } from '../dialogs/add-inventory-dialog/add-stock-dialog.component'
import { UpdateInventoryDialogComponent } from '../dialogs/update-inventory-dialog/update-inventory-dialog.component'

// import { subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  toggleProducts = true;
  toggleOrder = false;
  selectedFile: File
  
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
  }

  
  itemForm: FormGroup
  cartstock: any = []
  item: any = []
  toggleMen = false
  toggleWomen = false
  toggleAccessories = false

  constructor(private fb: FormBuilder, private itemService: ItemService, public dialog: MatDialog) { }

  openDeleteDialog(event): void {
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
    });
  }

  openUpdateDialog(event): void {
    sessionStorage.setItem('itemId', event.target.id)
    console.log(event.target.id)
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      minWidth: '300px',
      
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update dialog was closed')
    });
  }

  openAddStockDialog(event): void{
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(AddInventoryDialogComponent,{
      maxWidth:'300px',
      minHeight:'300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('add stock dialog was closed')
    })
  }

  openUpdateInventoryDialog(event): void{
    sessionStorage.setItem('stockId', event.target.id)
    const dialogRef = this.dialog.open(UpdateInventoryDialogComponent, {
      maxWidth: '300px',
      minHeight: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('update stock dialog closed')
    })
    // console.log(event.target.id)
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: new FormControl(),
      itemPrice: new FormControl(),
      itemDescription: new FormControl(),
      itemCategory: new FormControl(),
      gender: new FormControl()
    })
    this.getItems()
    // this.getOrdered()
  }

  toggleInv(){
    if(this.toggleProducts === false){
      this.toggleProducts = true
      this.toggleOrder = false
    }
  }

  toggleOrd(){
    if(this.toggleOrder === false){
      this.toggleOrder = true
      this.toggleProducts = false
    }
  }

  async submitForm(){
    await this.itemService.createItems(this.itemForm.value, this.selectedFile)
    // window.location.reload()
  }

  getItems(){
    this.itemService.getItems()
      .subscribe(items => this.item.push(items))

      console.log(this.item)
  }

  // getOrdered(){
  //   this.itemService.getOrdered()
  //     .subscribe(items => this.cartstock = items)

  //   setTimeout(() => {
  //     console.log(this.cartstock)
  //   }, 1000)
  // }

  // createStock(event){
  //   this.itemService.createStock(event.target.id)
  //     .subscribe()
  //   // console.log(event.target.id)
  // }

  toggleM(){
    if(this.toggleMen === false){
      this.toggleMen = true
    } else{
      this.toggleMen = false
    }
  }

  toggleW(){
    if(this.toggleWomen === false){
      this.toggleWomen = true
    } else{
      this.toggleWomen = false
    }
  }

  toggleA(){
    if(this.toggleAccessories === false){
      this.toggleAccessories = true
    } else{
      this.toggleAccessories = false
    }
  }

}