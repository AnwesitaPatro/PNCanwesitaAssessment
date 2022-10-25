import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad() {
    const userLoggedin: any = !!this.authService.checkUserSession();
    if (userLoggedin) {
      return userLoggedin;
    }
    this.router.navigate(['/']);
    return userLoggedin;
  }

  canActivate() {
    const userLoggedin: any = !!this.authService.checkUserSession();
    if (userLoggedin) {
      return userLoggedin;
    }
    this.router.navigate(['/']);
    return userLoggedin;
  }
}
