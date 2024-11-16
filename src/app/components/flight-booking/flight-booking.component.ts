import { Component, Input } from '@angular/core';
import { FlightBookingService } from '../../services/flight-booking.service';

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

  constructor(private flightService: FlightBookingService) { }

  passengerOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'];
  classOptions = ['Economy', 'Premium Economy', 'Business', 'First Class'];

  flightResults = [
    {
      id: '1',
      image: 'airline-logo.png',
      name: 'Airline Name',
      departure: '10:00 AM',
      arrival: '1:00 PM',
      type: 'Non-stop',
      duration: '3h',
      price: 250
    },
    // Additional flight data
  ];

  searchFlights() {

    const searchData = {
      from: this.from,
      to: this.to,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      tripType: this.tripType,
      passengers: this.passengers,
      travelClass: this.travelClass
    };

    this.flightService.searchFlights(searchData).subscribe((data: any) => {
      this.flightResults = data;
    });
    // Implement search functionality here
  }

  selectFlight(flight: any) {

    this.flightService.bookFlight(flight).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Flight booked successfully');
      }
    });
  }

}
