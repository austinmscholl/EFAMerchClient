import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  role = false
  dropdownMens = false;
  dropdownWomens = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.adminCheck()
  }

  adminCheck(){
    let admin = sessionStorage.getItem('role')
    if(admin === 'admin'){
      this.role = true
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
    console.log(event.target.name, event.target.id)
    return this.itemService.getCategory(event.target.name, event.target.id)
    .subscribe()
  }

  toggleWomens(){
    if(this.dropdownMens === true) {
      this.dropdownMens = false;
    } else {
      this.dropdownMens = true;
    }
  }

}
