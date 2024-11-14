import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {
  // Hotel Search & Booking Variables
  destination: string = '';
  checkinDate: string = '';
  checkoutDate: string = '';
  guests: number = 1;
  rooms: number = 1;
  guestOptions = [1, 2, 3, 4, 5];
  roomOptions = [1, 2, 3, 4];

  hotelResults = [
    { name: 'Hotel Sunshine', location: 'New York', rating: 4.5, price: 120, amenities: 'Free Wi-Fi, Gym, Pool', image: 'assets/img/hotel1.jpg' },
    { name: 'The Grand Palace', location: 'Los Angeles', rating: 4.8, price: 200, amenities: 'Free Breakfast, Gym, Spa', image: 'assets/img/hotel2.jpg' }
  ];

  location: string = '';
  date: string = '';
  time: string = '';
  guestCount: number = 2;
  cuisine: string = '';
  cuisineOptions = ['Italian', 'Chinese', 'Indian', 'American', 'French'];

  restaurantResults = [
    { name: 'Pasta Paradise', location: 'New York', cuisine: 'Italian', rating: 4.7, price: '$20-$50', features: 'Outdoor Seating, Vegan Options', image: 'assets/img/restaurant1.jpg' },
    { name: 'Spicy Delight', location: 'Los Angeles', cuisine: 'Indian', rating: 4.6, price: '$15-$40', features: 'Vegetarian, Gluten-free', image: 'assets/img/restaurant2.jpg' }
  ];

  packageDestination: string = '';
  packageDate: string = '';
  packageGuests: number = 1;

  packageResults = [
    { name: 'Beach Getaway', location: 'Miami', price: 500, duration: 7, description: '7-day trip to Miami with hotel stay, meals, and activities.', image: 'assets/img/package1.jpg' },
    { name: 'Mountain Adventure', location: 'Colorado', price: 800, duration: 5, description: '5-day adventure in Colorado with guided tours and accommodations.', image: 'assets/img/package2.jpg' }
  ];

  constructor(private router: Router) {}

  searchHotels() {
    console.log(`Searching hotels in ${this.destination} from ${this.checkinDate} to ${this.checkoutDate} for ${this.guests} guests in ${this.rooms} room(s).`);
    // Add API call to search for hotels here
  }

  findRestaurants() {
    console.log(`Searching restaurants in ${this.location} on ${this.date} at ${this.time} for ${this.guestCount} guests with ${this.cuisine} cuisine.`);
    // Add API call to search for restaurants here
  }

  searchPackages() {
    console.log(`Searching packages for ${this.packageDestination} on ${this.packageDate} for ${this.packageGuests} guests.`);
    // Add API call to search for packages here
  }

  makePayment(item: any) {
    this.router.navigate(['/payment-page'], { state: { data: item } });
  }

  bookHotel(hotel: any) {
    console.log(`Booking hotel: ${hotel.name}`);
    this.makePayment(hotel);
  }

  reserveTable(restaurant: any) {
    console.log(`Reserving table at: ${restaurant.name}`);
    this.makePayment(restaurant);
  }

  bookPackage(packageItem: any) {
    console.log(`Booking package: ${packageItem.name}`);
    this.makePayment(packageItem);
  }

  viewDetails(hotel: any) {
    console.log('Viewing details for', hotel.name);
    // Implement navigation to details page or modal display here
  }
}
