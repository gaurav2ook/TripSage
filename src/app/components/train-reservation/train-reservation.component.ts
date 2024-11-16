import { Component, Input } from '@angular/core';
import { TrainReservationService } from '../../services/train-reservation.service';

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

  constructor(private trainService: TrainReservationService) { }

  passengerOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'];
  classOptions = ['General', 'Sleeper', 'AC 3-Tier', 'AC 2-Tier', 'First Class'];

  trainResults = [
    {
      id: '1',
      image: 'train-icon.png',
      name: 'Express Train 12345',
      departure: '9:00 AM',
      arrival: '3:00 PM',
      duration: '6h',
      stops: 'Non-stop',
      classes: 'AC 3-Tier, Sleeper',
      price: 45
    },
  ];

  searchTrains() {
    const searchData = {
      from: this.fromStation,
      to: this.toStation,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      tripType: this.tripType,
      passengers: this.passengerCount,
      travelClass: this.travelClass
    };
    this.trainService.searchTrains(searchData).subscribe((data: any) => {
      this.trainResults = data;
    });
  }

  bookTrain(train: any) {
    this.trainService.bookTrain(train).subscribe((data: any) => {
      if(data.status === 'Saved') {
        alert('Train booked successfully');
      }
    });
  }

}
