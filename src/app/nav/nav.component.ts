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
    let admin = sessionStorage.getItem('admin')
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

  // getCategory(event) {
  //   sessionStorage.setItem('category', event.target.id)
  //   console.log(event.target.id)
  //   window.location.reload()
  // }

  toggleWomens(){
    if(this.dropdownMens === true) {
      this.dropdownMens = false;
    } else {
      this.dropdownMens = true;
    }
  }

}
