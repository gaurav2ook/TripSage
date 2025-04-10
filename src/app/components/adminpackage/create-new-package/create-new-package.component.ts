import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { PackagesService } from '../../../services/packages.service';
import { UserprofileService } from '../../../services/userprofile.service';
import { HotelBookingService } from '../../../services/hotel-booking.service';
import { FlightBookingService } from '../../../services/flight-booking.service';
import { RestaurantBookingService } from '../../../services/restaurant-booking.service';
import { TrainReservationService } from '../../../services/train-reservation.service';


@Component({
  selector: 'app-create-new-package',
  templateUrl: './create-new-package.component.html',
  styleUrls: ['./create-new-package.component.css'],
})
export class CreateNewPackageComponent implements OnInit {

  adminName = "";
  adminEmail = "";

  // Constructor to inject the Router service for navigation
  constructor(private router: Router, private packagesService: PackagesService, private userprofileService: UserprofileService, private hotelService: HotelBookingService, private flightService: FlightBookingService, private restaurantService: RestaurantBookingService, private trainService: TrainReservationService) {}


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
  showManualFormVisible: boolean = false

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe(data => {
      this.adminEmail = data.email;
      this.adminName = data.firstName + ' ' + data.lastName;
    });
    this.packagesService.getManualPackages().subscribe((response) => {
      console.log(response);
      
    });
  }

  // Toggle method to control section visibility
  togglePackageSection(section: string) {
    // Hide all sections first
    this.showHotelSection = false;
    this.showTrainSection = false;
    this.showFlightSection = false;
    this.showRestaurantSection = false;
    this.showManualFormVisible= false;

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
        case 'manualForm':
          this.showManualFormVisible = true;
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
      image: 'assets/img/hotel images/leela hotel.jpg',
      name: 'The Leela Palace Bengaluru',
      location: 'Bengaluru',
      rating: '⭐️⭐️⭐️⭐️ | 4.9/5 Excellent',
      price: '₹20000' ,
      amenities: 'Lush gardens, luxury spa, fine dining, business facilities',
    },
    // Additional hotel data can be added here
    {
      id: '2',
      image: 'assets/img/hotel images/taj hotel.jpg',
      name: 'Taj Lands End',
      location: 'Mumbai',
      rating: '⭐️⭐️⭐️⭐️ |  4.8/5 Excellent',
      price: "₹15,000–₹20,000 per night",
      amenities: 'Sea views, outdoor pool, spa, multiple restaurants',
    },

    {
      id: '3',
      image: 'assets/img/hotel images/udaipur hotel1.jpg',
      name: 'The Oberoi Udaivilas',
      location: ' Udaipur',
      rating: '⭐️⭐️⭐️⭐️ |  5/5 Excellent',
      price: '₹30,000–₹50,000 per night',
      amenities: 'Lakeside views, private pools, spa, cultural tours',
    },

    {
      id: '4',
      image: 'assets/img/hotel images/imperial hotel.jpg',
      name: 'The Imperial',
      location: 'New Delhi',
      rating: '⭐️⭐️⭐️⭐️ | 4.8/5 Excellent',
      price: ' ₹15,000–₹18,000 per night',
      amenities: 'Art Deco style, gardens, historic architecture, multiple dining options',
    },

    {
      id: '5',
      image: 'assets/img/hotel images/goa hotel1.jpg',
      name: 'Fairfield by Marriott Goa Benaulim',
      location: ' Goa',
      rating: '⭐️⭐️⭐️⭐️ | 4.5/5 Excellent',
      price: '₹8,000–₹12,000 per night',
      amenities: 'Beach access, buffet dining, pool​',
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
      image: 'assets/img/flight images/indigo.jpg',
      name: 'IndiGo BLR to UDR',
      departure: '8:30 AM',
      arrival: '10:40 AM',
      type: 'Non-stop',
      duration: '2h 10m',
      price: 6700
    },
    {
      id: '2',
      image: 'assets/img/flight images/air india.png',
      name: 'Air India BOM to UDR',
      departure: '10:15 AM',
      arrival: '11:35 AM',
      type: 'Non-stop',
      duration: '1h 20m',
      price: 5200
    },
    {
      id: '3',
      image: 'assets/img/flight images/vistara.png',
      name: 'Vistara DEL to BLR',
      departure: '7:00 AM',
      arrival: '9:40 AM',
      type: 'Non-stop',
      duration: '2h 40m',
      price: 8500
    },
    {
      id: '4',
      image: 'assets/img/flight images/spicejet.png',
      name: 'SpiceJet GOI to BLR',
      departure: '5:15 PM',
      arrival: '6:30 PM',
      type: 'Non-stop',
      duration: '1h 15m',
      price: 3000
    },
    {
      id: '5',
      image: 'assets/img/flight images/go first.jpg',
      name: 'Go First CCU to BLR',
      departure: '11:30 AM',
      arrival: '2:10 PM',
      type: 'Non-stop',
      duration: '2h 40m',
      price: 4900
    }
    // Additional flight data
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
      image: 'assets/img/train images/train1.jpg',
      name: 'CBE LTT Express',
      departure: '4:00 PM',
      arrival: '1:55 PM (next day)',
      duration: '21h 55m',
      stops: 'Limited',
      classes: 'AC 3-Tier, Sleeper',
      price: 1400
    },
    {
      id: '2',
      image: 'assets/img/train images/train2.jpg',
      name: 'Vasco Express',
      departure: '11:05 AM',
      arrival: '2:39 AM (next day)',
      duration: '15h 34m',
      stops: 'Limited',
      classes: 'AC 2-Tier, AC 3-Tier, Sleeper',
      price: 1250
    },
    {
      id: '3',
      image: 'assets/img/train images/rajdhani exp.jpg',
      name: 'Rajdhani Express',
      departure: '5:30 PM',
      arrival: '8:35 AM (next day)',
      duration: '15h 5m',
      stops: 'Non-stop',
      classes: 'AC 1-Tier, AC 2-Tier, AC 3-Tier',
      price: 3750
    },
    {
      id: '4',
      image: 'assets/img/train images/chetak exp.jpg',
      name: 'Chetak Express',
      departure: '7:40 PM',
      arrival: '8:20 AM (next day)',
      duration: '12h 40m',
      stops: 'Limited',
      classes: 'AC 3-Tier, Sleeper',
      price: 1150
    },
    {
      id: '5',
      image: 'assets/img/train images/duronto exp.jpg',
      name: 'Duronto Express',
      departure: '11:00 AM',
      arrival: '6:20 PM (next day)',
      duration: '31h 20m',
      stops: 'Limited',
      classes: 'AC 1-Tier, AC 2-Tier, AC 3-Tier',
      price: 4200
    }
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

  packages: any[] = []
  packageName = ""
  packageDescription = ""
  packagePrice = ""
  selectedHotel = ""
  selectedFlight =""
  selectedTrain = ""
  selectedRestaurant = ""
  

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

  submitPackage() {
    if (!this.searchHotels || !this.searchFlights || !this.searchTrains || !this.searchRestaurants) {
      alert('Please select all services before creating a package.');
      return;
    }
  
    const packageData = {
      name: this.packageName,
      description: this.packageDescription,
      price: this.packagePrice,
      hotel: this.selectedHotel,
      flight: this.selectedFlight,
      train: this.selectedTrain,
      restaurant: this.selectedRestaurant,
    };
  
    // Replace with your actual API call
    console.log('Submitting package:', packageData);
    alert('Package created successfully!');
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

    this.packagesService.createPackage({name: this.packageName, packages: this.packages}).subscribe((response) => {
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

  manualPackage = {
    name: '',
    location: '',
    price: null,
    duration: null,
    description: '',
    image: ''
  };
  
  createManualPackage() {
    console.log('Creating manual package:', this.manualPackage);
    if(this.manualPackage.name == ""){
      alert("Please enter a package name")
      return
    }
    if(this.manualPackage.location == ""){  
      alert("Please enter a package location")
      return
    }
    if(this.manualPackage.price == null){
      alert("Please enter a package price")
      return
    }
    if(this.manualPackage.duration == null){
      alert("Please enter a package duration")
      return
    }
    if(this.manualPackage.description == ""){
      alert("Please enter a package description")
      return
    }
    if(this.manualPackage.image == ""){
      alert("Please enter a package image")
      return
    }
    this.packagesService.createManualPackage(this.manualPackage).subscribe((response) => {
      if(response.response == "saved") {
        alert("Package created successfully")
        this.manualPackage = {
          name: '',
          location: '',
          price: null,
          duration: null,
          description: '',
          image: ''
        };
      } else {
        alert("Error creating package")
      }
    });
    
  }
  
}
