import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: './add-stock-dialog.component.html',
  styleUrls: ['./add-stock-dialog.component.scss']
})
export class AddStockDialogComponent implements OnInit {

  stock: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddStockDialogComponent>,
    private fb: FormBuilder
  ) { }


  onNoClick():void{
    this.dialogRef.close()
  }
  ngOnInit() {
    this.stock = this.fb.group({
      size: new FormControl(),
      quantity: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.stock.value)
    this.dialogRef.close()
  }

}
