import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { PackagesService } from '../../services/packages.service';
import { UserprofileService } from '../../services/userprofile.service';
import { HotelBookingService } from '../../services/hotel-booking.service';
import { FlightBookingService } from '../../services/flight-booking.service';
import { RestaurantBookingService } from '../../services/restaurant-booking.service';
import { TrainReservationService } from '../../services/train-reservation.service';

@Component({
  selector: 'app-itinerary-management',
  templateUrl: './itinerary-management.component.html',
  styleUrls: ['./itinerary-management.component.css']
})
export class ItineraryManagementComponent {
  userName = "";
  userEmail = "";

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
  flightTripType: string = 'one-way'; // Default value, could be 'one-way' or 'round-trip'

  // Cuisine type (for restaurants)
  cuisine: string = ''; // Default empty value
  cuisineOptions: string[] = ['Italian', 'Chinese', 'Indian', 'Mexican']; // List of available cuisines

  // Toggle properties for each section
  showHotelSection: boolean = true;
  showTrainSection: boolean = false;
  showFlightSection: boolean = false;
  showRestaurantSection: boolean = false;

  // Flags to track if services are added
  hotelAdded: boolean = false;
  trainAdded: boolean = false;
  flightAdded: boolean = false;
  restaurantAdded: boolean = false;

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe((data: { email: string; firstName: string; lastName: string; }) => {
      this.userEmail = data.email;
      this.userName = data.firstName + ' ' + data.lastName;
    });
  }

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
  hotelDestination: string = '';
  checkinDate: string = '';
  checkoutDate: string = '';
  guests: number = 1;
  rooms: number = 1;
  guestOptions = [1, 2, 3, 4, 5];
  roomOptions = [1, 2, 3, 4];
  hotelResults = [
    {
      id: '1',
      image: 'hotel-image.jpg',
      name: 'Hotel Sunshine',
      location: 'City Center',
      rating: '⭐️⭐️⭐️⭐️ | 8.5/10 Excellent',
      price: 120,
      amenities: 'Free Wi-Fi, Pool, Gym',
    },
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
      id: '1',
      image: 'airline-logo.png',
      name: 'Airline Name',
      departure: '10:00 AM',
      arrival: '1:00 PM',
      type: 'Non-stop',
      duration: '3h',
      price: 250
    },
  ];

  // Train search fields
  trainFrom = '';
  trainTo = '';
  trainDepartureDate = '';
  trainReturnDate = '';
  trainPassengerCount = '1 Adult';
  trainTravelClass = 'General';
  trainTripType = 'one-way';
  trainPassengerOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'];
  trainClassOptions = ['General', 'Sleeper', 'AC 3-Tier', 'AC 2-Tier', 'First Class'];
  trainResults = [
    {
      id: '1',
      image: 'train-icon.png',
      name: 'Express Train 12345',
      departure: '9:00 AM',
      arrival: '3:00 PM',
      duration: '6h',
      stops: 'Non-stop',
      classes: 'AC 3-Tier, Sleeper',
      price: 45
    },
  ];

  // Restaurant search fields
  restaurantLocation: string = '';
  restaurantDate: string = '';
  restaurantTime: string = '';
  restaurantGuestCount: number = 1;
  restaurantCuisine: string = '';
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
    }
  ];

  packages: any[] = []
  packageName = ""

  // Hotel-related methods
  searchHotels() {
    const searchData = {
      dest: this.hotelDestination,
      checkin: this.checkinDate,
      checkout: this.checkoutDate,
      guests: this.guests,
      rooms: this.rooms,
    };

    this.hotelService.searchHotels(searchData).subscribe((data: any) => {
      this.hotelResults = data;
    });
  }

  // Flight-related methods
  searchFlights() {

    const searchData = {
      from: this.flightFrom,
      to: this.flightTo,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      tripType: this.flightTripType,
    };

    this.flightService.searchFlights(searchData).subscribe((data: any) => {
      this.flightResults = data;
    });
  }


  // Train-related methods
  searchTrains() {
    const searchData = {
      from: this.trainFrom,
      to: this.trainTo,
      departureDate: this.trainDepartureDate,
      returnDate: this.trainReturnDate,
      tripType: this.trainTripType,
      passengers: this.trainPassengerCount,
      travelClass: this.trainTravelClass
    };
    this.trainService.searchTrains(searchData).subscribe((data: any) => {
      this.trainResults = data;
    });
  }

  // Restaurant-related methods
  searchRestaurants() {

    const searchData = {
      location: this.restaurantLocation,
      date: this.restaurantDate,
      time: this.restaurantTime,
      guests: this.restaurantGuestCount,
      cuisine: this.restaurantCuisine,
    };

    this.restaurantService.searchRestaurants(searchData).subscribe((data: any) => {
      this.restaurantResults = data;
    });
  }

  // Method to remove a package
  removePackage(packageToRemove: any): void {
    const index = this.packages.indexOf(packageToRemove);
    if (index !== -1) {
      this.packages.splice(index, 1); // Remove the package from the array
    }
  }

  // Method to create a package (or perform any necessary logic)
  createPackage(): void {
    if(this.packageName == ""){
      alert("Please enter a package name")
      return
    }

    this.packagesService.createPackage({name: this.packageName, packages: this.packages}).subscribe((response: { response: string; }) => {
      if(response.response == "saved") {
        alert("Package created successfully")
        this.packages = []
      } else {
        alert("Error creating package")
      }
    });
  }

  addToPackage(item: any, type: string) {
    item.ptype = type
    this.packages.push(item)
  }

  addPackage() {
    console.log('Adding package with details:', this.tripPackage);
  }
  tripPackage(arg0: string, tripPackage: any) {
    throw new Error('Method not implemented.');
  }
  

  // Constructor to inject the Router service for navigation
  constructor(private router: Router, private packagesService: PackagesService, private userprofileService: UserprofileService, private hotelService: HotelBookingService, private flightService: FlightBookingService, private restaurantService: RestaurantBookingService, private trainService: TrainReservationService) {}
}
