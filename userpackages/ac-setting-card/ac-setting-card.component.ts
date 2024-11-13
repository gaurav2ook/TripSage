import { Component } from '@angular/core';

@Component({
  selector: 'app-ac-setting-card',
  templateUrl: './ac-setting-card.component.html',
  styleUrl: './ac-setting-card.component.css'
})
export class AcSettingCardComponent {
  user = {
    username: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '1234 Main Street, City, Country',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  updateAccount() {
    // Logic to update user details (e.g., call API to update user info)
    console.log('User information updated:', this.user);
  }

  changePassword() {
    // Logic to change the user's password (e.g., check if new passwords match, call API)
    if (this.user.newPassword === this.user.confirmPassword) {
      console.log('Password changed successfully');
    } else {
      console.log('Passwords do not match!');
    }
  }
}