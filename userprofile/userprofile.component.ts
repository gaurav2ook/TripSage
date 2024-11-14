import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  // User profile details
  username: string = 'JohnDoe';
  email: string = 'john.doe@example.com';
  fullName: string = 'John Doe';
  location: string = 'San Francisco, CA';
  phoneNumber: string = '+1234567890';

  // User activities and bookings data
  activities: string[] = [
    'Visited Eiffel Tower',
    'Booked a tour to Grand Canyon',
    'Completed a cooking class in Italy'
  ];

  bookings: string[] = [
    'Booking #1234: 3-Day Paris Tour',
    'Booking #5678: Grand Canyon Hiking',
    'Booking #9876: Venice Gondola Ride'
  ];

  constructor(private router: Router, private authService: AuthService) {}

  // Define the navigateTo method to handle route navigation from the cards
  navigateTo(route: string) {
    switch (route) {
      case 'browseTrips':
        this.router.navigate(['/browse-trips']);
        break;
      case 'bookTrip':
        this.router.navigate(['/book-trip']);
        break;
      case 'myBookings':
        this.router.navigate(['/my-bookings']);
        break;
      case 'myReviews':
        this.router.navigate(['/my-reviews']);
        break;
      case 'accountSettings':
        this.router.navigate(['/account-settings']);
        break;
      default:
        console.warn('Route not defined:', route);
    }
  }

  // Navigate to Edit Profile page
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  // Log the user out and navigate to login page
  logout() {
    this.authService.logout();  // Call the logout method from AuthService
    this.router.navigate(['/login']);  // Redirect to the login page after logging out
  }
}
