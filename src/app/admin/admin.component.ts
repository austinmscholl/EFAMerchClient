import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ItemService } from '../item.service'
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selectedFile: File
  
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    // console.log(file)
  }

  itemForm: FormGroup
  item: any = []
  toggleMen = false
  toggleWomen = false
  toggleAccessories = false
  updateClicked = false

  constructor(private fb: FormBuilder, private itemService: ItemService, public dialog: MatDialog) { }

  openDialog(event): void {
    sessionStorage.setItem('itemId', event.target.id)
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: new FormControl(),
      itemPrice: new FormControl(),
      itemDescription: new FormControl(),
      itemCategory: new FormControl(),
      gender: new FormControl(),
      itemImg: new FormControl(),
    })

    this.getItems()
  }

  submitForm(){
    this.itemService.createItems(this.itemForm.value, this.selectedFile)
    window.location.reload()
    // console.log(this.selectedFile)
  }

  getItems(){
    this.itemService.getItems()
      .subscribe(items => this.item.push(items))

      console.log(this.item)
  }

  // updateItem(event){
  //   console.log(event.target.id)
  //   this.itemService.updateItem(event.target.id)
  //   this.updateClicked = !this.updateClicked
  // }

  toggleModal(){
    if(this.updateClicked === false) {
      this.updateClicked = true
    } else {
      this.updateClicked = false
    }
  }

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
