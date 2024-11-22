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
      image: 'assets/img/train images/train1.jpg',
      name: 'CBE LTT Express',
      departure: '4:00 PM',
      arrival: '1:55 PM (next day)',
      duration: '21h 55m',
      stops: 'Limited',
      classes: 'AC 3-Tier, Sleeper',
      price: 1400
    },
    {
      id: '2',
      image: 'assets/img/train images/train2.jpg',
      name: 'Vasco Express',
      departure: '11:05 AM',
      arrival: '2:39 AM (next day)',
      duration: '15h 34m',
      stops: 'Limited',
      classes: 'AC 2-Tier, AC 3-Tier, Sleeper',
      price: 1250
    },
    {
      id: '3',
      image: 'assets/img/train images/rajdhani exp.jpg',
      name: 'Rajdhani Express',
      departure: '5:30 PM',
      arrival: '8:35 AM (next day)',
      duration: '15h 5m',
      stops: 'Non-stop',
      classes: 'AC 1-Tier, AC 2-Tier, AC 3-Tier',
      price: 3750
    },
    {
      id: '4',
      image: 'assets/img/train images/chetak exp.jpg',
      name: 'Chetak Express',
      departure: '7:40 PM',
      arrival: '8:20 AM (next day)',
      duration: '12h 40m',
      stops: 'Limited',
      classes: 'AC 3-Tier, Sleeper',
      price: 1150
    },
    {
      id: '5',
      image: 'assets/img/train images/duronto exp.jpg',
      name: 'Duronto Express',
      departure: '11:00 AM',
      arrival: '6:20 PM (next day)',
      duration: '31h 20m',
      stops: 'Limited',
      classes: 'AC 1-Tier, AC 2-Tier, AC 3-Tier',
      price: 4200
    }
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
