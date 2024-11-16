// account-settings.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'] // Make sure to add a CSS file for styling
})
export class AccountSettingsComponent implements OnInit {
  accountSettingsForm: FormGroup;
  adminName = 'Admin Name';
  adminEmail = 'admin@example.com';
  adminRole = 'Administrator';
  adminMobileNumber = '1234567890';

  constructor(private fb: FormBuilder, private userprofileService: UserprofileService) {
    // Initialize form with FormBuilder
    this.accountSettingsForm = this.fb.group({
      fullName: [this.adminName, [Validators.required, Validators.minLength(3)]],
      email: [this.adminEmail, [Validators.required, Validators.email]],
      role: [this.adminRole, [Validators.required]],
      phone: [this.adminMobileNumber, [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe((data: any) => {
      this.adminName = data.firstName + ' ' + data.lastName;
      this.adminEmail = data.email;
      this.adminRole = data.role;
      this.adminMobileNumber = data.phoneNumber;
    });
  }

  // Method for handling form submission
  onSubmit(): void {
    if (this.accountSettingsForm.valid) {
      const { fullName, email, password, confirmPassword, phone } = this.accountSettingsForm.value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const data = {
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ')[1],
        phoneNumber: phone,
        password: password
      };

      this.userprofileService.updateUserProfile(data).subscribe((data: any) => {
        this.adminName = data.firstName + ' ' + data.lastName;
        this.adminMobileNumber = data.phoneNumber;
      });

      alert('Account settings updated successfully.');
    } else {
      alert('Please fill in the required fields correctly.');
    }
  }
}