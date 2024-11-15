import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';


@Component({
  selector: 'app-delete-package',
  templateUrl: './deletepackage.component.html',
  styleUrls: ['./deletepackage.component.css']
})
export class DeletepackageComponent implements OnInit {
  showHotelSection: boolean = true;
  errorMessage: string | null = null;
  
  // package template
  packageDestination: string = '';
  packageDate: string = '';
  packageGuests: number = 1;

  packageResults= [
    { id:'1',name: 'Beach Getaway', location: 'Miami', price: 500, duration: 7, description: '7-day trip to Miami with hotel stay, meals, and activities.', image: 'assets/img/package1.jpg' },
    { id:'2',name: 'Mountain Adventure', location: 'Colorado', price: 800, duration: 5, description: '5-day adventure in Colorado with guided tours and accommodations.', image: 'assets/img/package2.jpg' }
  ];

  // hotel result
  // Hotel Search & Booking Variables
  destination: string = '';
  checkinDate: string = '';
  checkoutDate: string = '';
  guests: number = 1;
  rooms: number = 1;
  guestOptions = [1, 2, 3, 4, 5];
  roomOptions = [1, 2, 3, 4];

  hotelResults= [
    { id:'1', name: 'Hotel Sunshine', location: 'New York', rating: 4.5, price: 120, amenities: 'Free Wi-Fi, Gym, Pool', image: 'assets/img/hotel1.jpg' },
    { id:'2', name: 'The Grand Palace', location: 'Los Angeles', rating: 4.8, price: 200, amenities: 'Free Breakfast, Gym, Spa', image: 'assets/img/hotel2.jpg' }
  ];

  // restaurant package

  location: string = '';
  date: string = '';
  time: string = '';
  guestCount: number = 2;
  cuisine: string = '';
  cuisineOptions = ['Italian', 'Chinese', 'Indian', 'American', 'French'];

  restaurantResults= [
    { id:'1',name: 'Pasta Paradise', location: 'New York', cuisine: 'Italian', rating: 4.7, price: '$20-$50', features: 'Outdoor Seating, Vegan Options', image: 'assets/img/restaurant1.jpg' },
    { id:'2', name: 'Spicy Delight', location: 'Los Angeles', cuisine: 'Indian', rating: 4.6, price: '$15-$40', features: 'Vegetarian, Gluten-free', image: 'assets/img/restaurant2.jpg' }
  ];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.loadPackages();
    this.loadHotels();
    this.loadRestaurants();
  }

  loadPackages() {
    this.packageService.getPackages().subscribe(
      (data: any) => {
        this.packageResults = data;
      },
      (error: any) => {
        this.errorMessage = "Error loading packages";
      }
    );
  }

  loadHotels() {
    this.packageService.getHotels().subscribe(
      (data: any) => {
        this.hotelResults = data;
      },
      (error: any) => {
        this.errorMessage = "Error loading hotels";
      }
    );
  }

  loadRestaurants() {
    this.packageService.getRestaurants().subscribe(
      (data: any) => {
        this.restaurantResults = data;
      },
      (error: any) => {
        this.errorMessage = "Error loading restaurants";
      }
    );
  }

  deletePackage(packageId: string) {
    this.packageService.deletePackage(packageId).subscribe(
      () => {
        this.packageResults = this.packageResults.filter(pkg => pkg.id !== packageId);
      },
      (error: any) => {
        this.errorMessage = "Error deleting the package";
      }
    );
  }

  deleteHotel(hotelId: string) {
    this.packageService.deleteHotel(hotelId).subscribe(
      () => {
        this.hotelResults = this.hotelResults.filter(hotel => hotel.id !== hotelId);
      },
      (error: any) => {
        this.errorMessage = "Error deleting the hotel";
      }
    );
  }

  deleteRestaurant(restaurantId: string) {
    this.packageService.deleteRestaurant(restaurantId).subscribe(
      () => {
        this.restaurantResults = this.restaurantResults.filter(restaurant => restaurant.id !== restaurantId);
      },
      (error: any) => {
        this.errorMessage = "Error deleting the restaurant";
      }
    );
  }
}
