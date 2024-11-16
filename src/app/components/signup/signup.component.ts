import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Import AuthService
import { User } from '../user-management/user-management.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  // List for gender options and roles (for dropdown fields)
  genderOptions: string[] = ['Male', 'Female', 'Other'];
  roleOptions: string[] = ['User', 'Admin'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService  // Inject AuthService
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // Added phone number validation
      gender: ['', Validators.required],
      role: ['', Validators.required],  // Role field validation
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // Getters for easy access to form controls in the template
  get formControls() {
    return this.signupForm.controls;
  }

  // Form submission handling
  onSignup(): void {
    this.isSubmitted = true;

    // Check if the form is valid and passwords match
    if (this.signupForm.invalid || 
        this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      this.errorMessage = 'Please make sure all fields are filled correctly and passwords match.';
      return;
    }

    // Prepare the User object to send to the backend, including username, role, and phone number
    const newUser: User = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      phoneNumber: this.signupForm.value.phoneNumber,  // Include phone number
      gender: this.signupForm.value.gender,  // Include gender selected by user
      role: this.signupForm.value.role,      // Include role selected by user
      password: this.signupForm.value.password
    };
    
    // Call AuthService to handle signup
    this.authService.signup(newUser).subscribe((response: any) => {
      if(response.status === "success") {
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = response.data || 'Signup failed. Please try again.';
      }
    });
  }

  // Navigation to login page
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
