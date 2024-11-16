import { UserprofileService } from "../../services/userprofile.service";
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
  role: string = 'User';
  phoneNumber: string = '+1234567890';  // Adding phone number for more user detail

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

  constructor(private router: Router, private authService: AuthService, private userprofileService: UserprofileService) {}


  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe(data => { 
        this.username = data.username;
        this.email = data.email;
        this.fullName = data.firstName + ' ' + data.lastName;
        this.role = data.role;
        this.phoneNumber = data.phoneNumber;
    });
  }
  // Define the navigateTo method to handle route navigation
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  // Navigate to Edit Profile page
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  // Navigate to Bookings page
  viewBookings() {
    this.router.navigate(['/bookings']);
  }

  // Log the user out and navigate to login page
  logout() {
    this.authService.logout();  // Call the logout method from AuthService
    this.router.navigate(['/login']);  // Redirect to the login page after logging out
  }
}

