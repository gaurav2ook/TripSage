import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../../../services/userprofile.service';
import { HotelBookingService } from '../../../services/hotel-booking.service';
import { PackagesService } from '../../../services/packages.service';

@Component({
  selector: 'app-create-hotel-package',
  templateUrl: './create-hotel-package.component.html',
  styleUrl: './create-hotel-package.component.css'
})
export class CreateHotelPackageComponent implements OnInit {

  showHotelSection: boolean = true;

  // Flags to track if services are added
 hotelAdded: boolean = true;

  // Hotel search fields
  destination: string = '';
 checkinDate: string = '';
 checkoutDate: string = '';
 guests: number = 1;
 rooms: number = 1;
 guestOptions = [1, 2, 3, 4, 5];
 roomOptions = [1, 2, 3, 4];
 hotelResults
//  : [
//   {
//     id: string,
//     image: string,
//     name: string,
//     location: string,
//     rating: string,
//     price: number,
//     amenities: string
//   }
//  ] 
= [
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

  email: string = '';
  name: string = '';

  ngOnInit(): void {
    this.userprofileService.getUserProfile().subscribe(data => {
      this.email = data.email;
      this.name = data.firstName + ' ' + data.lastName;
    });
  }

// Hotel-related methods
searchHotels() {
  const searchData = {
    dest: this.destination,
    checkin: this.checkinDate,
    checkout: this.checkoutDate,
    guests: this.guests,
    rooms: this.rooms
  };

  this.hotelService.searchHotels(searchData).subscribe((data: any) => {
    this.hotelResults = data;
  });
}

  bookHotel(hotel: any) { 
    this.packagesService.bookHotelPackage(hotel).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Hotel booked successfully');
      }
    });
}

// Constructor to inject the Router service for navigation
constructor(private router: Router, private userprofileService: UserprofileService, private packagesService: PackagesService, private hotelService: HotelBookingService) {}

}
