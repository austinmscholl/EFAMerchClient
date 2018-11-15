import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MIN_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: FormGroup
  newUser: any = []
  toggleForm = false;
  submitted: Boolean

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      email: [''],
      password:['', [Validators.minLength(6), Validators.maxLength(30), Validators.required]],
      confirmPass: ['', [Validators.minLength(6), Validators.maxLength(30), Validators.required]],
      firstname: [''],
      lastname: ['']
    })
  }


  setToken(user){
    sessionStorage.setItem('token', user.sessionToken)
    sessionStorage.setItem('admin', user.user.role)
    window.location.reload()
    // console.log(user.user.role)
  }

  toggle(){
    console.log('toggle clicked')
    this.toggleForm = !this.toggleForm;
  }

  logIn(){
    console.log(this.user.controls)
    this.auth.logIn(this.user.controls.email.value,
      this.user.controls.password.value)
      .subscribe(user => this.setToken(user))
      // console.log(this.user.value)  
  }

  signUp(){
    this.submitted = true

    if(!this.user.valid){
      return
    }

    if(this.user.value.password === this.user.value.confirmPass){
      this.auth.signUp(this.user.controls.email.value,
        this.user.controls.password.value,
        this.user.controls.firstname.value,
        this.user.controls.lastname.value)
        .subscribe(user => this.setToken(user))
    } else {
      alert('Passwords need to match!')
    }
  }

}
