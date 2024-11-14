import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  // Check if the user is logged in by checking the presence of the auth token
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem('authToken') !== null;
    }
    return false;
  }

  // Navigate to profile based on stored user role
  navigateToProfile(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const role = sessionStorage.getItem('userRole');
      console.log('User role:', role);  // Check if the role is correctly retrieved
      if (role === 'ADMIN') {
        this.router.navigate(['/adminprofile']);
        console.log('Navigating to admin profile');  // Confirm if navigation is triggered
      } else if (role === 'USER') {
        this.router.navigate(['/userprofile']);
        console.log('Navigating to user profile');
      } else {
        this.router.navigate(['/login']);
        console.log('Redirecting to login');
      }
    }
  }
  

  // Logout functionality to remove auth data from localStorage
  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('userRole');
      this.router.navigate(['/login']);  // Redirect to login page after logout
    }
  }
}
