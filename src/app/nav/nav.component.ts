import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  role:string
  dropdownMens = false;
  dropdownWomens = false;

  constructor() { }

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

  toggleWomens(){

  }

}
