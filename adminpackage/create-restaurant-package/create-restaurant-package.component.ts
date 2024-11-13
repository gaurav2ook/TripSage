import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant-package',
  templateUrl: './create-restaurant-package.component.html',
  styleUrl: './create-restaurant-package.component.css'
})
export class CreateRestaurantPackageComponent {

  showRestaurantSection: boolean = true;
  restaurantAdded: boolean = true;


  // Trip basic details
 currentLocation: string = '';
 destination: string = '';
 travelDate: string = '';
 numberOfPeople: number = 1;

 
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
      image: 'restaurant-image.jpg',
      name: 'Restaurant Name',
      location: 'Downtown',
      cuisine: 'Italian',
      price: '$$',
      rating: 4.5,
      features: 'Outdoor Seating, Vegetarian Options'
    },
    {
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

  // Method to search for restaurants based on user input
  findRestaurants() {
    console.log('Searching for restaurants with the following criteria:', {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    });

    // Implement the actual search functionality, e.g., call an API
    // For now, we will simulate filtering the restaurantResults based on the selected options
    this.restaurantResults = this.restaurantResults.filter(restaurant => 
      (this.location ? restaurant.location.toLowerCase().includes(this.location.toLowerCase()) : true) &&
      (this.cuisine !== 'All' ? restaurant.cuisine === this.cuisine : true)
    );
  }

  // Method to reserve a table at a restaurant
  reserveTable(restaurant: any) {
    console.log('Reserving table at:', restaurant.name);
    // Implement reservation functionality here
    // This could involve updating a backend system with the reservation details.
  }

   // Method to handle the "Create Trip" button click
 createTrip() {
  console.log('Trip details:', this.tripPackage);
  // Navigate to the trip detail page with the selected package
  this.router.navigate(['/trip-detail'], { state: { tripPackage: this.tripPackage } });
}
  tripPackage(arg0: string, tripPackage: any) {
    throw new Error('Method not implemented.');
  }

// Constructor to inject the Router service for navigation
constructor(private router: Router) {}

}
