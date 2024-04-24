import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
   isLoggedIn : boolean = false;
 

  //  baseUrl: string = "http://localhost:9000/api/v1/login";
   public role : string ="";
   public user : string ="";
   public firstName : string = "";
   public check : boolean = false;  
   public checkGuard : boolean = false;



  constructor(private http : HttpClient, private router : Router) { }

  userLogin(loginForm : any){
      return this.http.post('http://localhost:9000/api/v1/login', loginForm);     
  }
  
}
