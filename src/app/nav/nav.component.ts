import { Component, OnInit } from '@angular/core';
import {NavserviceService} from '../navservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  role:string
  dropdownMens = false;
  dropdownWomens = false;

  constructor(private navserviceService: NavserviceService) { }

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

  getMCategory(event) {
    console.log(event.target.id)
    this.navserviceService.getMCategory('male', event.target.id)
  }

  getWCategory(event) {
    console.log(event.target.id)
    this.navserviceService.getWCategory('female', event.target.id)
  }

  toggleWomens(){
    if(this.dropdownMens === true) {
      this.dropdownMens = false;
    } else {
      this.dropdownMens = true;
    }
  }

}
