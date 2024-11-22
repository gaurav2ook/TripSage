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
      image: 'assets/img/flight images/indigo.jpg',
      name: 'IndiGo BLR to UDR',
      departure: '8:30 AM',
      arrival: '10:40 AM',
      type: 'Non-stop',
      duration: '2h 10m',
      price: 6700
    },
    {
      id: '2',
      image: 'assets/img/flight images/air india.png',
      name: 'Air India BOM to UDR',
      departure: '10:15 AM',
      arrival: '11:35 AM',
      type: 'Non-stop',
      duration: '1h 20m',
      price: 5200
    },
    {
      id: '3',
      image: 'assets/img/flight images/vistara.png',
      name: 'Vistara DEL to BLR',
      departure: '7:00 AM',
      arrival: '9:40 AM',
      type: 'Non-stop',
      duration: '2h 40m',
      price: 8500
    },
    {
      id: '4',
      image: 'assets/img/flight images/spicejet.png',
      name: 'SpiceJet GOI to BLR',
      departure: '5:15 PM',
      arrival: '6:30 PM',
      type: 'Non-stop',
      duration: '1h 15m',
      price: 3000
    },
    {
      id: '5',
      image: 'assets/img/flight images/go first.jpg',
      name: 'Go First CCU to BLR',
      departure: '11:30 AM',
      arrival: '2:10 PM',
      type: 'Non-stop',
      duration: '2h 40m',
      price: 4900
    }
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
