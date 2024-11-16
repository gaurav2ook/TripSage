import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css'],
})
export class AdminprofileComponent implements OnInit {
  // Form groups for different package types
  tripPackageForm: FormGroup;
  hotelPackageForm: FormGroup;
  restaurantPackageForm: FormGroup;

  email: string = '';
  name: string = '';

  constructor(
    private fb: FormBuilder,
    private userprofileService: UserprofileService,
    private router: Router
  ) {
    // Initializing forms with FormBuilder and Validators
    this.tripPackageForm = this.fb.group({
      tripName: ['', Validators.required],
      tripDescription: ['', Validators.required],
      tripPrice: ['', [Validators.required, Validators.min(0)]],
    });

    this.hotelPackageForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelDescription: ['', Validators.required],
      hotelPrice: ['', [Validators.required, Validators.min(0)]],
    });

    this.restaurantPackageForm = this.fb.group({
      restaurantName: ['', Validators.required],
      restaurantDescription: ['', Validators.required],
      restaurantPrice: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
    this.userprofileService.getUserProfile().subscribe(data => {
      this.email = data.email;
      this.name = data.firstName + ' ' + data.lastName;
    });
  }

  onCreateTripPackage() {
    // if (this.tripPackageForm.valid) {
    //   const tripPackageData = this.tripPackageForm.value;
    //   this.adminProfileService.createTripPackage(tripPackageData).subscribe({
    //     next: (response) => {
    //       console.log('Trip package created successfully:', response);
    //     },
    //     error: (error) => {
    //       console.error('Error creating trip package:', error);
    //     }
    //   });
    // }
  }

  onCreateHotelPackage() {
    // if (this.hotelPackageForm.valid) {
    //   const hotelPackageData = this.hotelPackageForm.value;
    //   this.adminProfileService.createHotelPackage(hotelPackageData).subscribe({
    //     next: (response) => {
    //       console.log('Hotel package created successfully:', response);
    //     },
    //     error: (error) => {
    //       console.error('Error creating hotel package:', error);
    //     }
    //   });
    // }
  }

  onCreateRestaurantPackage() {
    // if (this.restaurantPackageForm.valid) {
    //   const restaurantPackageData = this.restaurantPackageForm.value;
    //   this.adminProfileService.createRestaurantPackage(restaurantPackageData).subscribe({
    //     next: (response) => {
    //       console.log('Restaurant package created successfully:', response);
    //     },
    //     error: (error) => {
    //       console.error('Error creating restaurant package:', error);
    //     }
    //   });
    // }
  }

  // Helper method to navigate to the home page
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Navigate to other pages if necessary
  navigateTo(page: string) {
    switch (page) {
      case 'createNewPackage':
        this.router.navigate(['/create-new-package']);
        break;
      case 'createHotelPackage':
        this.router.navigate(['/create-hotel-package']);
        break;
      case 'createRestaurantPackage':
        this.router.navigate(['/create-restaurant-package']);
        break;
      case 'userBookings':
        this.router.navigate(['/user-bookings']);
        break;
      case 'deletePackages':
        this.router.navigate(['/delete-packages']);
        break;
      case 'accountSettings':
        this.router.navigate(['/account-settings']);
        break;
      default:
        console.log('Invalid page');
    }
  }
}