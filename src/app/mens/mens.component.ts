import { Component, OnInit } from '@angular/core';
import { MensService } from '../mens.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  items: Object;

  constructor(private mensService: MensService) { }

  ngOnInit() {
    this.mensService.getItems().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )

  }

}
