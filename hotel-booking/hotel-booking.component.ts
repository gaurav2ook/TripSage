import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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

  hotelResults = [
    {
      image: 'hotel-image.jpg',
      name: 'Hotel Name',
      location: 'City Center',
      rating: '⭐️⭐️⭐️⭐️ | 8.5/10 Excellent',
      price: 120,
      amenities: 'Free Wi-Fi, Pool, Gym',
    },
    // Additional hotel data can be added here
  ];

  searchHotels() {
    console.log('Searching for hotels:', {
      destination: this.destination,
      checkinDate: this.checkinDate,
      checkoutDate: this.checkoutDate,
      guests: this.guests,
      rooms: this.rooms,
    });
    // Implement search logic
  }

  viewDetails(hotel: any) {
    console.log('Viewing details for', hotel);
  }

  bookHotel(hotel: any) {
    console.log('Booking hotel:', hotel);
  }

}
