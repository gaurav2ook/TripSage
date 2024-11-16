import { Component } from '@angular/core';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrl: './userbookings.component.css'
})
export class UserbookingsComponent {
  bookings: any[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      // Dummy data
      this.bookings = [
        {
          id: 1,
          userName: 'John Doe',
          bookingType: 'Hotel',
          details: '3 nights at Grand Hotel',
          bookingDate: new Date('2024-11-12'),
          bookingStatus: 'Completed'
        },
        {
          id: 2,
          userName: 'Jane Smith',
          bookingType: 'Flight',
          details: 'NYC to LA, round trip',
          bookingDate: new Date('2024-11-15'),
          bookingStatus: 'Cancelled'
        },
        {
          id: 3,
          userName: 'Mark Taylor',
          bookingType: 'Restaurant',
          details: 'Dinner at Ocean Grill',
          bookingDate: new Date('2024-11-18'),
          bookingStatus: 'Completed'
        }
      ];
      this.isLoading = false;
    }, 2000); // Simulating a loading delay
  }

}