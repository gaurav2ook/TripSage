import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../../../services/userprofile.service';
import { PackagesService } from '../../../services/packages.service';
import { RestaurantBookingService } from '../../../services/restaurant-booking.service';

@Component({
  selector: 'app-create-restaurant-package',
  templateUrl: './create-restaurant-package.component.html',
  styleUrls: ['./create-restaurant-package.component.css']
})
export class CreateRestaurantPackageComponent implements OnInit {

  showRestaurantSection = true;
  restaurantAdded = false;
  


  @Input() booking: any;

  location = '';
  date = '';
  time = '';
  guestCount = '1 Person';
  cuisine = 'All';

  guestOptions: string[] = ['1 Person', '2 People', '3 People', '4 People', '5+ People'];
  cuisineOptions: string[] = ['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'Chinese'];

  restaurantResults: any[] = [];

  email = '';
  name = '';

  constructor(
    private userprofileService: UserprofileService,
    private router: Router,
    private restaurantBookingService: RestaurantBookingService,
    private packagesService: PackagesService
  ) {}

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe({
      next: (data) => {
        this.email = data?.email || '';
        this.name = `${data?.firstName || ''} ${data?.lastName || ''}`.trim();
      },
      error: (err) => {
        console.error('Failed to load user profile:', err);
      }
    });

    this.loadDefaultRestaurants();
  }

  loadDefaultRestaurants(): void {
    this.restaurantResults = [
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
        image: 'assets/img/restaurant images/kolkata rest1.jpg',
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
    ];
  }

  findRestaurants(): void {
    const searchData = {
      location: this.location,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      cuisine: this.cuisine
    };

    this.hideSearchResults = false;
    
    this.restaurantBookingService.searchRestaurants(searchData).subscribe({
      next: (data: any[]) => {
        this.restaurantResults = data.length ? data : [];
      },
      error: (err) => {
        console.error('Error fetching restaurants:', err);
        this.restaurantResults = [];
      }
    });
  }

  reserveTable(restaurant: any): void {
    const bookingDetails = {
      restaurantId: restaurant?.id,
      restaurantName: restaurant?.name,
      location: restaurant?.location,
      cuisine: restaurant?.cuisine,
      price: restaurant?.price,
      date: this.date,
      time: this.time,
      guestCount: this.guestCount,
      userEmail: this.email,
      userName: this.name,
      image: restaurant?.image || 'assets/img/default-restaurant.jpg'
    };

    this.packagesService.bookRestaurantPackage(bookingDetails).subscribe({
      next: (response: any) => {
        if (response?.status === 'Saved') {
          alert('Restaurant booked successfully');
          this.restaurantAdded = true;
          this.showRestaurantSection = false;
        } else {
          alert('Failed to book restaurant. Please try again.');
        }
      },
      error: (err) => {
        console.error('Booking error:', err);
        alert('Error booking restaurant');
      }
    });
  }

  showSearchRestaurant: boolean = false;
  manualRestaurantVisible: boolean = false;
  hideSearchResults: boolean = false;

  restaurant = {
    name: '',
    location: '',
    cuisine: '',
    rating: 0,
    price: '',
    features: '',
    image: ''
  };

  toggleManualRestaurant() {
    this.manualRestaurantVisible = true;
    this.showSearchRestaurant = false;
    this.hideSearchResults = true; // ✅ hide results when manually adding
  }

  toggleSearchRestaurant() {
    this.showSearchRestaurant = true;
    this.manualRestaurantVisible = false;
    this.hideSearchResults = false; // ✅ show results when toggling back
  }

  addRestaurant(restaurantData: any): void {
    // Logic to add selected restaurant from search results
    console.log('Adding restaurant from search:', restaurantData);
  }

  submitRestaurant(): void {
    // Logic to handle manual restaurant submission
    console.log('Submitting manually added restaurant:', this.restaurant);
    // Optionally reset form:
    this.restaurant = {
      name: '',
      location: '',
      cuisine: '',
      rating: 0,
      price: '',
      features: '',
      image: ''
    };
    this.manualRestaurantVisible = false;
  }
}
