import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  role:string
  dropdownMens = false;
  dropdownWomens = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.adminCheck()
  }

  adminCheck(){
    if(sessionStorage.getItem('role') === 'admin'){
      this.role = sessionStorage.getItem('role')
    } else{
      console.log('you are not admin')
    }
  }

  toggleMens(){
    if(this.dropdownMens === true) {
      this.dropdownMens = false;
    } else {
      this.dropdownMens = true;
    }
  }

  getCategory(event) {
    console.log(event.target.id)
    this.itemService.getCategory('male', event.target.id)
  }

  toggleWomens(){
    if(this.dropdownMens === true) {
      this.dropdownMens = false;
    } else {
      this.dropdownMens = true;
    }
  }

}
