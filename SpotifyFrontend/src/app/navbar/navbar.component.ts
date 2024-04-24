import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  admin : boolean = false;
  user : boolean = false;

  constructor(private userservice : UserLoginService){}
  ngOnInit(){
  }

}
