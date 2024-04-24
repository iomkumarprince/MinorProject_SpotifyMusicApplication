import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/services/user-login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 
  constructor(private userservice : UserLoginService, private router : Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.userservice.isLoggedIn)
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl("");
        return false;
      }
  }
}

