import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderComponent } from 'src/app/header/header.component';
import { UserLoginService } from 'src/app/services/user-login.service';

@Injectable({
  providedIn: 'root'
})

export class LogoutGuard implements CanDeactivate<unknown> {

  constructor(private loginAuth: UserLoginService) { }

  canDeactivate(
    component: HeaderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginAuth.checkGuard) {
      this.loginAuth.checkGuard = false;
      return window.confirm('Are you sure you want to Logout?')
    }
    else {
      return true;
    }
  }
}
