import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-train-reservation',
  templateUrl: './train-reservation.component.html',
  styleUrl: './train-reservation.component.css'
})
export class TrainReservationComponent {
  @Input() booking: any;

  fromStation = '';
  toStation = '';
  departureDate = '';
  returnDate = '';
  tripType = 'one-way';
  passengerCount = '1 Adult';
  travelClass = 'General';

  passengerOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'];
  classOptions = ['General', 'Sleeper', 'AC 3-Tier', 'AC 2-Tier', 'First Class'];

  trainResults = [
    {
      icon: 'train-icon.png',
      name: 'Express Train 12345',
      departureTime: '9:00 AM',
      arrivalTime: '3:00 PM',
      duration: '6h',
      stops: 'Non-stop',
      classes: 'AC 3-Tier, Sleeper',
      price: 45
    },
    // Add more train data as needed
  ];

  searchTrains() {
    console.log('Searching trains with the following criteria:', {
      fromStation: this.fromStation,
      toStation: this.toStation,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      tripType: this.tripType,
      passengerCount: this.passengerCount,
      travelClass: this.travelClass
    });
    // Implement actual train search logic here
  }

  bookTrain(train: any) {
    console.log('Booking train:', train);
    // Implement booking functionality here
  }

}
