import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title="Reactive Form";

  constructor(private signupservice : SignupService, private router: Router){}
  
  userregistration=new FormGroup(
    {
      "firstName": new FormControl(""),
      "lastName": new FormControl(""),
      "emailId" : new FormControl(""),
      "password" : new FormControl(""),     
      "mobileNo": new FormControl(""),
      "confirmPassword": new FormControl(""),
      "address": new FormControl("")       
    },     
  )
  
    get password(){
      return this.userregistration.get('password');
    }

    get confirmPassword(){
      return this.userregistration.get('confirmPassword'); 
       }    

    signup(){
      console.log(this.userregistration.value);
      this.signupservice.signup(this.userregistration.value).subscribe(
        response => {
          alert("Registered successfully"); 
          this.router.navigateByUrl("")
        },
        error=>
      alert("Sorry, Error found")
    )
      
    }
}
