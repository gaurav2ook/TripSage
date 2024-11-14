// account-settings.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'] // Make sure to add a CSS file for styling
})
export class AccountSettingsComponent implements OnInit {
  accountSettingsForm: FormGroup;
  adminName = 'Admin Name'; // Example placeholder values
  adminEmail = 'admin@example.com'; // Example placeholder values
  adminRole = 'Administrator'; // Example placeholder values

  constructor(private fb: FormBuilder) {
    // Initialize form with FormBuilder
    this.accountSettingsForm = this.fb.group({
      fullName: [this.adminName, [Validators.required, Validators.minLength(3)]],
      email: [this.adminEmail, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {}

  // Method for handling form submission
  onSubmit(): void {
    if (this.accountSettingsForm.valid) {
      const { fullName, email, password, confirmPassword } = this.accountSettingsForm.value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Implement the actual logic for updating account settings here
      console.log('Account updated:', {
        fullName,
        email,
        password
      });

      alert('Account settings updated successfully.');
    } else {
      alert('Please fill in the required fields correctly.');
    }
  }

  // Helper getters for accessing form controls easily in the template
  get fullName() {
    return this.accountSettingsForm.get('fullName');
  }

  get email() {
    return this.accountSettingsForm.get('email');
  }

  get password() {
    return this.accountSettingsForm.get('password');
  }

  get confirmPassword() {
    return this.accountSettingsForm.get('confirmPassword');
  }
}
