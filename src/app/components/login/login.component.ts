import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for form controls
  get formControls() {
    return this.loginForm.controls;
  }

  // Form submission handling
  onLogin(): void {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid login credentials.';
      return;
    } 

    const { email, password } = this.loginForm.value;

    // Call AuthService to handle login
    this.authService.login(email, password).subscribe((response: any) => {
        if(response.status === "success") {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = response.data || 'Login failed. Please try again.';
        }
    });
  }

  // Navigate to signup page
  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
