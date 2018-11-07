import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'
import { Item } from '../models/item'
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { AddStockDialogComponent } from '../add-stock-dialog/add-stock-dialog.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  selectedFile: File
  
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
  }

  itemForm: FormGroup
  item: any = []
  toggleMen = false
  toggleWomen = false
  toggleUpdate = false
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
      maxWidth: '300px',
      minHeight: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update dialog was closed')
    });
  }

  openAddStockDialog(event): void{
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(AddStockDialogComponent,{
      maxWidth:'300px',
      minHeight:'300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('add stock dialog was closed')
    })
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
  }

  submitForm(){
    this.itemService.createItems(this.itemForm.value, this.selectedFile)
    window.location.reload()
  }

  getItems(){
    this.itemService.getItems()
      .subscribe(items => this.item.push(items))

      console.log(this.item)
  }

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