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

  // Restaurant Search & Booking Variables
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

  // Package Search & Booking Variables
  packageDestination: string = '';
  packageDate: string = '';
  packageGuests: number = 1;

  packageResults = [
    { name: 'Beach Getaway', location: 'Miami', price: 500, duration: 7, description: '7-day trip to Miami with hotel stay, meals, and activities.', image: 'assets/img/package1.jpg' },
    { name: 'Mountain Adventure', location: 'Colorado', price: 800, duration: 5, description: '5-day adventure in Colorado with guided tours and accommodations.', image: 'assets/img/package2.jpg' }
  ];

  // Train Search & Booking Variables
  trainResults = [
    {
      name: 'Express Train',
      origin: 'New York',
      destination: 'Washington DC',
      duration: '3h 45m',
      price: 80,
      image: 'assets/img/train1.jpg',
      icon: 'assets/img/train-icon.png',
      departureTime: '08:30 AM',
      arrivalTime: '12:15 PM',
      stops: 'Non-stop',
      classes: 'Economy, Business'
    },
    {
      name: 'Scenic Train',
      origin: 'San Francisco',
      destination: 'Los Angeles',
      duration: '6h 30m',
      price: 100,
      image: 'assets/img/train2.jpg',
      icon: 'assets/img/train-icon.png',
      departureTime: '09:00 AM',
      arrivalTime: '03:30 PM',
      stops: '2 stops',
      classes: 'Economy, First Class'
    }
  ];

  // Flight Search & Booking Variables
  flightResults = [
    {
      name: 'Airline X',
      origin: 'New York',
      destination: 'Los Angeles',
      duration: '6h 0m',
      price: 300,
      image: 'assets/img/flight1.jpg',
      logo: 'assets/img/airline-logo.png',
      airline: 'Airline X',
      departureTime: '10:00 AM',
      arrivalTime: '04:00 PM',
      flightType: 'Non-stop'
    },
    {
      name: 'Airline Y',
      origin: 'Chicago',
      destination: 'Miami',
      duration: '3h 15m',
      price: 200,
      image: 'assets/img/flight2.jpg',
      logo: 'assets/img/airline-logo.png',
      airline: 'Airline Y',
      departureTime: '11:30 AM',
      arrivalTime: '02:45 PM',
      flightType: '1 stop'
    }
  ];

  constructor(private router: Router) {}

  // Methods to search for hotels, restaurants, packages, trains, and flights
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

  searchTrains() {
    console.log(`Searching trains from origin to destination.`);
    // Add API call to search for trains here
  }

  searchFlights() {
    console.log(`Searching flights from origin to destination.`);
    // Add API call to search for flights here
  }

  // Method to make a payment for a selected booking item
  makePayment(item: any) {
    this.router.navigate(['/payment-page'], { state: { data: item } });
  }

  // Methods to book hotels, reserve tables, book packages, trains, and flights
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

  bookTrain(train: any) {
    console.log(`Booking train: ${train.name}`);
    this.makePayment(train);
  }

  bookFlight(flight: any) {
    console.log(`Booking flight: ${flight.name}`);
    this.makePayment(flight);
  }

  // Method to view details of any selected booking item
  viewDetails(item: any) {
    console.log('Viewing details for', item.name);
    // Implement navigation to a details page or display a modal with more information
  }
}