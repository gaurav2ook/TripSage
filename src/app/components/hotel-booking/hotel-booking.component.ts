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
      image: 'hotel-image.jpg',
      name: 'Hotel Namee',
      location: 'City Center',
      rating: '⭐️⭐️⭐️⭐️ | 8.5/10 Excellent',
      price: 120,
      amenities: 'Free Wi-Fi, Pool, Gym',
    },
    // Additional hotel data can be added here
  ];

  searchHotels() {
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
