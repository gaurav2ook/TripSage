import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.css'
})
export class FlightBookingComponent {
  @Input() booking: any;
  from = '';
  to = '';
  departureDate = '';
  returnDate = '';
  tripType = 'one-way';
  passengers = '1 Adult';
  travelClass = 'Economy';

  passengerOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'];
  classOptions = ['Economy', 'Premium Economy', 'Business', 'First Class'];

  flightResults = [
    {
      logo: 'airline-logo.png',
      airline: 'Airline Name',
      departureTime: '10:00 AM',
      arrivalTime: '1:00 PM',
      flightType: 'Non-stop',
      duration: '3h',
      price: 250
    },
    // Additional flight data
  ];

  searchFlights() {
    console.log('Searching for flights:', {
      from: this.from,
      to: this.to,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      tripType: this.tripType,
      passengers: this.passengers,
      travelClass: this.travelClass
    });
    // Implement search functionality here
  }

  selectFlight(flight: any) {
    console.log('Selected flight:', flight);
    // Implement booking functionality here
  }

}
