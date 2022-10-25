import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLogin: any = false;

  constructor(private router: Router) {
    this.checkUserSession();
  }

  checkUserSession() {
    this.isLogin = sessionStorage.getItem('isLogin') || false;
    return this.isLogin;
  }

  authenticateUser() {
    return new Promise((resolve) => {
      sessionStorage.setItem('isLogin', 'true');
      this.isLogin = true;
      resolve(true);
    });
  }

  logout() {
    sessionStorage.clear();
    this.checkUserSession();
    setTimeout(() => {
      this.router.navigate(['/register']);
    });
  }
}
