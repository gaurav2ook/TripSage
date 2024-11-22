import { Component, Input } from '@angular/core';
import { RestaurantBookingService } from '../../services/restaurant-booking.service';

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

  constructor(private restaurantBookingService: RestaurantBookingService) { }

  guestOptions = ['1 Person', '2 People', '3 People', '4 People', '5+ People'];
  cuisineOptions = ['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'Chinese'];

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

  findRestaurants() {
    console.log('Searching for restaurants with the following criteria:', {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    });
    // Implement actual search functionality here
    const criteria = {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    };
    this.restaurantBookingService.searchRestaurants(criteria).subscribe((data: any) => {
      this.restaurantResults = data;
    });
  }

  reserveTable(restaurant: any) {
    this.restaurantBookingService.bookRestaurant(restaurant).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Restaurant reserved successfully');
      }
    });
    // Implement reservation functionality here
  }

}
