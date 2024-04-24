import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { LoginGuard } from 'src/guards/login.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tokenData : any;

  message: string ="";  
  returnUrl: string ="";   
  
  loginForm= new FormGroup(
    {
      "emailId" : new FormControl(""),
      "password" : new FormControl("")               
    }
    )   
    
    constructor(private userservice:UserLoginService, private loginGuard : LoginGuard, private route: Router, private playlist : PlaylistService){}
   
 
  userLogin(){   
    this.userservice.userLogin(this.loginForm.value).subscribe( 
      response => { 
        this.tokenData = response;
        localStorage.setItem('jwtKey', this.tokenData.token);       
        this.userservice.check = true;
        this.userservice.role = this.tokenData.role;
        this.playlist.emailId = this.tokenData.email;
        this.userservice.isLoggedIn = true; 
        this.userservice.firstName = this.tokenData.name;
        this.route.navigateByUrl("");  
    },
    error=>
      alert("Sorry, Please enter correct email and password.")     
    )
     
  }
}
