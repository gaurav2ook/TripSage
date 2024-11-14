import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-booking',
  templateUrl: './restaurant-booking.component.html',
  styleUrl: './restaurant-booking.component.css'
})
export class RestaurantBookingComponent {
  @Input() booking: any;

  location = '';
  date = '';
  time = '';
  guestCount = '1 Person';
  cuisine = 'All';

  guestOptions = ['1 Person', '2 People', '3 People', '4 People', '5+ People'];
  cuisineOptions = ['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'Chinese'];

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
    // Additional restaurant data can be added here
  ];

  findRestaurants() {
    console.log('Searching for restaurants with the following criteria:', {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    });
    // Implement actual search functionality here
  }

  reserveTable(restaurant: any) {
    console.log('Reserving table at:', restaurant.name);
    // Implement reservation functionality here
  }

}
