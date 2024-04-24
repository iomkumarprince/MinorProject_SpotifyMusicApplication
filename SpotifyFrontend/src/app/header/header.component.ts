import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {



  constructor(private userService: UserLoginService, private router: Router) { }

  checkLogin: boolean = false;
  flag: boolean = false;
  userName: string = "";
  welcome: boolean = false;

  ngOnInit() {
    this.checkLogin = this.userService.check;
    this.userName = this.userService.firstName;
    if(this.userName != ""){
        this.welcome = true;
    }
  }

  logout() {
    this.flag = window.confirm("Are you sure you want to logout ?");
    if (this.flag = true) {
      this.userService.check = false;
      this.userService.role = "";
      this.userService.checkGuard = true;
      this.userService.firstName = "";
      this.welcome = false;
      localStorage.clear();
      // this.router.navigateByUrl("");
      location.reload();
    }
  }

}
