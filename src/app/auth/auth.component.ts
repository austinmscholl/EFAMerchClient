import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: FormGroup
  newUser: any = []
  toggleForm = false;

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl()
    })
  }

  setToken(){
    localStorage.setItem('token', this.newUser.token)
    console.log(this.newUser.token)
  }

  toggle(){
    console.log('toggle clicked')
    this.toggleForm = !this.toggleForm;
  }

  logIn(){
    console.log(this.user.controls)
    this.auth.logIn(this.user.controls.email.value,
      this.user.controls.password.value)
        .subscribe(data => this.newUser.push(data))

        this.setToken()
  }

  signUp(){
    console.log(this.user.controls)
    this.auth.signUp(this.user.controls.email.value,
      this.user.controls.password.value,
      this.user.controls.firstname.value,
      this.user.controls.lastname.value)
        .subscribe(data => this.newUser.push(data))

        this.setToken()
  }

}
