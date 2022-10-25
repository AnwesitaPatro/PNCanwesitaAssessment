import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { emailValidator } from 'src/app/shared/utility/form-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;

  registerForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
      updateOn: 'blur',
    }),
    email: new FormControl('', {
      validators: [Validators.required, emailValidator],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'blur',
    }),
    bio: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
      updateOn: 'blur',
    }),
  });
  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {
    if (!this.authService.isLogin) {
      this.authService.logout();
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    if (this.registerForm.valid) {
      console.log("hello",this.registerForm.value);
      this.apiService.validateLogin().subscribe(({ success }) => {
        if (success) {
          this.authService
            .authenticateUser()
            .then(() => {
              this.loading = false;
              this.goToProfile();
            })
            .catch(() => (this.loading = false));
        }
      });
    } else {
      console.log('Invalid Details');
      this.loading = false;
    }
  }

  goToProfile() {
    setTimeout(() => {
      this.router.navigate(['/profile']);
    });
  }
}
