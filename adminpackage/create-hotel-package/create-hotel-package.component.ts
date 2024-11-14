import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hotel-package',
  templateUrl: './create-hotel-package.component.html',
  styleUrl: './create-hotel-package.component.css'
})
export class CreateHotelPackageComponent {

  showHotelSection: boolean = true;

  // Flags to track if services are added
 hotelAdded: boolean = true;

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
  tripPackage: any;
  currentLocation: any;
  destination: any;
  travelDate: any;
  numberOfPeople: any;

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
