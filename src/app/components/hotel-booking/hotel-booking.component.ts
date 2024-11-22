import { Component, Input } from '@angular/core';
import { HotelBookingService } from '../../services/hotel-booking.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.css'
})
export class HotelBookingComponent {
  @Input() booking: any;

  destination = '';
  checkinDate = '';
  checkoutDate = '';
  guests = '1 Adult';
  rooms = '1 Room';

  guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'];
  roomOptions = ['1 Room', '2 Rooms', '3 Rooms', '4 Rooms'];

  constructor(private hotelService: HotelBookingService) {}

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

  searchHotels() {

    if(this.destination === '' || this.checkinDate === '' || this.checkoutDate === '') {
      alert('Please fill in all the fields');
      return;
    } else if(this.checkinDate >= this.checkoutDate) {
      alert('Check-in date should be before check-out date');
      return;
    }

    const searchData = {
      dest: this.destination,
      checkin: this.checkinDate,
      checkout: this.checkoutDate,
      guests: this.guests,
      rooms: this.rooms,
    };

    this.hotelService.searchHotels(searchData).subscribe((data: any) => {
      this.hotelResults = data;
    });

  }

  bookHotel(hotel: any) {
    this.hotelService.bookHotel(hotel).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Hotel booked successfully');
      }
    });
  }

}
