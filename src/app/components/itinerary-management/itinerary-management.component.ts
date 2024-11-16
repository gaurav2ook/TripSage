import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-itinerary-management',
  templateUrl: './itinerary-management.component.html',
  styleUrls: ['./itinerary-management.component.css']
})
export class ItineraryManagementComponent {
  // Trip basic details
  currentLocation: string = '';
  destination: string = '';
  travelDate: string = '';
  numberOfPeople: number = 1;

  // Flight details
  departureAirport: string = '';
  arrivalAirport: string = '';
  flightDate: string = '';
  flightPassengerCount: number = 1;
  flightClass: string = 'Economy';

  // Flight trip type (One-way or Round-trip)
  flightTripType: string = 'one-way';  // Default value, could be 'one-way' or 'round-trip'

  // Cuisine type (for restaurants)
  cuisine: string = '';  // Default empty value
  cuisineOptions: string[] = ['Italian', 'Chinese', 'Indian', 'Mexican'];  // List of available cuisines

  // Toggle properties for each section
  showHotelSection: boolean = false;
  showTrainSection: boolean = false;
  showFlightSection: boolean = false;
  showRestaurantSection: boolean = false;

  // Flags to track if services are added
  hotelAdded: boolean = false;
  trainAdded: boolean = false;
  flightAdded: boolean = false;
  restaurantAdded: boolean = false;

  // Toggle method to control section visibility
  togglePackageSection(section: string) {
    // Hide all sections first
    this.showHotelSection = false;
    this.showTrainSection = false;
    this.showFlightSection = false;
    this.showRestaurantSection = false;

    // Reset all flags
    this.hotelAdded = false;
    this.trainAdded = false;
    this.flightAdded = false;
    this.restaurantAdded = false;

    // Show the clicked section
    switch (section) {
      case 'hotels':
        this.showHotelSection = true;
        break;
      case 'trains':
        this.showTrainSection = true;
        break;
      case 'flights':
        this.showFlightSection = true;
        break;
      case 'restaurants':
        this.showRestaurantSection = true;
        break;
      default:
        break;
    }
  }

  // Hotel search fields
  checkinDate: string = '';
  checkoutDate: string = '';
  guests: number = 1;
  rooms: number = 1;
  guestOptions = [1, 2, 3, 4, 5];
  roomOptions = [1, 2, 3, 4];
  hotelResults = [
    { image: 'path/to/image', name: 'Hotel Sunshine', location: 'City Center', rating: 4.5, price: 120, amenities: 'Free Wi-Fi, Pool, Gym' }
  ];

  // Flight search fields
  flightFrom: string = '';
  flightTo: string = '';
  departureDate: string = '';
  returnDate: string = '';
  passengers: number = 1;
  travelClass: string = 'Economy';
  passengerOptions = [1, 2, 3, 4, 5];
  classOptions = ['Economy', 'Business', 'First Class'];
  flightResults = [
    { 
      logo: 'path/to/logo', 
      airline: 'Airways A', 
      departureTime: '10:00 AM', 
      arrivalTime: '2:00 PM', 
      flightType: 'Non-stop', 
      duration: '4h', 
      price: 300, 
      image: 'path/to/flight-image.jpg',
      name: 'Flight A',                  
      stops: 'Non-stop',                 
      class: 'Economy',
      route: 'New York to LA'          
    }
  ];

  // Train search fields
  fromStation: string = '';
  toStation: string = '';
  departureDateTrain: string = '';
  passengerCount: number = 1;
  trainResults = [
    { 
      icon: 'path/to/icon', 
      name: 'Express Train', 
      departureTime: '8:00 AM', 
      arrivalTime: '12:00 PM', 
      duration: '4h', 
      stops: 'Non-stop', 
      classes: 'AC First Class', 
      price: 50,
      image: 'path/to/train-image.jpg',
      route: 'Station A to Station B'
    }
  ];

  // Restaurant search fields
  restaurantLocation: string = '';
  restaurantDate: string = '';
  restaurantResults = [
    { name: 'Restaurant A', location: 'City Center', cuisine: 'Italian', rating: 4.5, price: 40, image: 'path/to/restaurant-image.jpg' }
  ];

  // Dummy trip package structure to hold selected items
  tripPackage = {
    hotels: [],
    flights: [],
    trains: [],
    restaurants: []
  };

  // Methods for managing trip packages
  addPackage() {
    console.log('Adding package with basic trip details:', {
      currentLocation: this.currentLocation,
      destination: this.destination,
      travelDate: this.travelDate,
      numberOfPeople: this.numberOfPeople
    });
  }

  // Hotel-related methods
  searchHotels() {
    console.log('Searching hotels in:', this.destination, 'from', this.checkinDate, 'to', this.checkoutDate);
  }

  viewHotelDetails(hotel: any) {
    console.log('Viewing details for hotel:', hotel);
  }

  bookHotel(hotel: any) {
    this.tripPackage.hotels.push(); // Add hotel to trip package
    this.hotelAdded = true; // Mark hotel as added
    console.log('Hotel added to package:', hotel);
    console.log('Current trip package:', this.tripPackage);
  }

  // Flight-related methods
  searchFlights() {
    console.log('Searching flights from:', this.departureAirport, 'to:', this.arrivalAirport, 'Departure:', this.flightDate);
  }

  viewFlightDetails(flight: any) {
    console.log('Viewing flight details:', flight);
  }

  bookFlight(flight: any) {
    this.tripPackage.flights.push(); // Add flight to trip package
    this.flightAdded = true; // Mark flight as added
    console.log('Flight added to package:', flight);
    console.log('Current trip package:', this.tripPackage);
  }

  // Train-related methods
  searchTrains() {
    console.log('Searching trains from:', this.fromStation, 'to:', this.toStation, 'Departure:', this.departureDateTrain);
  }

  viewTrainDetails(train: any) {
    console.log('Viewing train details:', train);
  }

  bookTrain(train: any) {
    this.tripPackage.trains.push(); // Add train to trip package
    this.trainAdded = true; // Mark train as added
    console.log('Train added to package:', train);
    console.log('Current trip package:', this.tripPackage);
  }

  // Restaurant-related methods
  searchRestaurants() {
    console.log('Finding restaurants in:', this.restaurantLocation, 'on', this.restaurantDate);
  }

  viewRestaurantDetails(restaurant: any) {
    console.log('Viewing restaurant details:', restaurant);
  }

  bookRestaurant(restaurant: any) {
    this.tripPackage.restaurants.push(); // Add restaurant to trip package
    this.restaurantAdded = true; // Mark restaurant as added
    console.log('Restaurant added to package:', restaurant);
    console.log('Current trip package:', this.tripPackage);
  }

  // Method to view details of an item (to fix the missing method error)
  viewDetails(item: any) {
    console.log('Viewing details for:', item);
    // Logic to display item details or trigger a modal/dialog could be added here
  }

  // Method to handle the "Create Trip" button click
  createTrip() {
    console.log('Trip details:', this.tripPackage);
    // Navigate to the trip detail page with the selected package
    this.router.navigate(['/trip-detail'], { state: { tripPackage: this.tripPackage } });
  }

  // Constructor to inject the Router service for navigation
  constructor(private router: Router) {}
}