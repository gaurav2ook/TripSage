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
      image: 'assets/img/restaurant images/banguluru rest1.jpg',
      name: 'Toit Brewpub',
      location: 'Indiranagar, Bengaluru',
      cuisine: 'International, Brewpub',
      price: '$$',
      rating: 4.6,
      features: 'Craft Beer, Lively Ambiance, Vegetarian Options'
    },
    {
      id: '2',
      image: 'assets/img/restaurant images/banguluru resr2.jpg',
      name: 'The Fatty Bao',
      location: 'Indiranagar, Bengaluru',
      cuisine: 'Asian, Fusion',
      price: '$$',
      rating: 4.5,
      features: 'Pan-Asian Dishes, Rooftop Seating'
    },
    {
      id: '3',
      image: 'assets/img/restaurant images/mumbai rest1.jpg',
      name: 'Britannia & Co.',
      location: 'Ballard Estate, Mumbai',
      cuisine: 'Parsi, Indian',
      price: '$$',
      rating: 4.7,
      features: 'Heritage Setting, Authentic Parsi Dishes'
    },
    {
      id: '4',
      image: 'assets/img/restaurant images/mumbai rest2.jpg',
      name: 'Salt Water Cafe',
      location: 'Bandra West, Mumbai',
      cuisine: 'European',
      price: '$$',
      rating: 4.5,
      features: 'Cozy Interiors, Diverse Menu'
    },
    {
      id: '5',
      image: 'assets/img/restaurant images/delhi rest1.jpg',
      name: 'SodaBottleOpenerWala',
      location: 'Khan Market, New Delhi',
      cuisine: 'Parsi, Indian',
      price: '$$',
      rating: 4.4,
      features: 'Quirky Decor, Family-Friendly'
    },
    {
      id: '6',
      image: 'assets/img/restaurant images/delhi rest 2.jpg',
      name: 'Diggin Cafe',
      location: 'Anand Lok, New Delhi',
      cuisine: 'Continental, Italian',
      price: '$$',
      rating: 4.6,
      features: 'Instagram-Worthy Ambiance, Outdoor Seating'
    },
    {
      id: '7',
      image: 'assets/img/restaurant images/udaipur rest1.jpg',
      name: 'Tribute Restaurant',
      location: 'Near Lake Pichola, Udaipur',
      cuisine: 'Indian, Grill',
      price: '$$',
      rating: 4.7,
      features: 'Lakeside Dining, Cultural Ambiance'
    },
    {
      id: '8',
      image: 'assets/img/restaurant images/udaipur rest2.jpg',
      name: 'Jaiwana Haveli Rooftop Restaurant',
      location: 'Lal Ghat, Udaipur',
      cuisine: 'Indian, Cafe',
      price: '$$',
      rating: 4.6,
      features: 'Stunning Views, Rooftop Seating'
    },
    {
      id: '9',
      image: 'assets/img/restaurant images/goa rest1.jpg',
      name: 'Peter Cat',
      location: 'Park Street, Kolkata',
      cuisine: 'Indian, Continental',
      price: '$$',
      rating: 4.5,
      features: 'Famous Chelo Kebab, Nostalgic Ambiance'
    },
    {
      id: '10',
      image: 'assets/img/restaurant images/goa rest2.jpg',
      name: 'Mum’s Kitchen',
      location: 'Panaji, Goa',
      cuisine: 'Goan, Seafood',
      price: '$$',
      rating: 4.6,
      features: 'Traditional Goan Recipes, Cozy Ambiance'
    }
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
