import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../../../services/userprofile.service';
import { PackagesService } from '../../../services/packages.service';
import { RestaurantBookingService } from '../../../services/restaurant-booking.service';

@Component({
  selector: 'app-create-restaurant-package',
  templateUrl: './create-restaurant-package.component.html',
  styleUrl: './create-restaurant-package.component.css'
})
export class CreateRestaurantPackageComponent implements OnInit {

  showRestaurantSection: boolean = true;
  restaurantAdded: boolean = true;
 
  @Input() booking: any;  // Assuming booking is passed from the parent component

  location = '';
  date = '';
  time = '';
  guestCount = '1 Person';  // Default to 1 Person
  cuisine = 'All';  // Default to All cuisines

  guestOptions = ['1 Person', '2 People', '3 People', '4 People', '5+ People'];
  cuisineOptions = ['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'Chinese'];

  // Sample restaurant data
  restaurantResults = [
    {
      id: '1',
      image: 'restaurant-image.jpg',
      name: 'Restaurant Name',
      location: 'Downtown',
      cuisine: 'Italian',
      price: '$$',
      rating: 4.5,
      features: 'Outdoor Seating, Vegetarian Options'
    },
    {
      id: '2',
      image: 'restaurant-image2.jpg',
      name: 'Another Restaurant',
      location: 'Uptown',
      cuisine: 'Japanese',
      price: '$$$',
      rating: 4.0,
      features: 'Sushi Bar, Vegan Options'
    },
    // Additional restaurant data can be added here
  ];

  email: string = '';
  name: string = '';

  constructor(private userprofileService: UserprofileService, private router: Router, private restaurantBookingService: RestaurantBookingService, private packagesService: PackagesService) {}

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe(data => {
      this.email = data.email;
      this.name = data.firstName + ' ' + data.lastName;
    });
  }

  // Method to search for restaurants based on user input
  findRestaurants() {
    
    const searchData = {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    };

    this.restaurantBookingService.searchRestaurants(searchData).subscribe((data: any) => {
      this.restaurantResults = data;
    });
  }

  // Method to reserve a table at a restaurant
  reserveTable(restaurant: any) {
    console.log('Reserving table at:', restaurant.name);
    this.packagesService.bookRestaurantPackage(restaurant).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Restaurant booked successfully');
      }
    });
  }


}