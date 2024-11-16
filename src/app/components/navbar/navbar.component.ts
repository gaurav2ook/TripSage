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
    if(this.isLoggedIn()) { 
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const role = sessionStorage.getItem('userRole');
        if (role === 'admin') {
          this.router.navigate(['/adminprofile']);
        } else if (role === 'user') {
          this.router.navigate(['/userprofile']);
        } else {
          this.router.navigate(['/login']);
        }
      }
    } else {
      sessionStorage.clear();
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
