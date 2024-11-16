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
 hotelResults: [
  {
    id: string,
    image: string,
    name: string,
    location: string,
    rating: string,
    price: number,
    amenities: string
  }
 ] = [
   { 
    id: '1',
    image: 'hotel-image.jpg',
    name: 'Hotel Namee',
    location: 'City Center',
    rating: '⭐️⭐️⭐️⭐️ | 8.5/10 Excellent',
    price: 120,
    amenities: 'Free Wi-Fi, Pool, Gym',
  }
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