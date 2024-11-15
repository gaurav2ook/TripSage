import { Component, OnInit } from '@angular/core';

interface Booking {
  id: number;
  bookingType: string;
  details: string;
  bookingDate: Date;
  bookingStatus: string;
}

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrl: './mybookings.component.css'
})
export class MybookingsComponent implements OnInit {
  bookings: Booking[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    // Simulate a delay to show loading
    setTimeout(() => {
      this.bookings = [
        {
          id: 1,
          bookingType: 'Hotel',
          details: 'Hotel stay at Seaside Resort',
          bookingDate: new Date('2023-12-10'),
          bookingStatus: 'Pending'
        },
        {
          id: 2,
          bookingType: 'Flight',
          details: 'Flight to Paris',
          bookingDate: new Date('2024-01-15'),
          bookingStatus: 'Pending'
        }
      ];

      // Update booking statuses automatically
      this.updateBookingStatuses();

      this.isLoading = false;
    }, 2000); // Simulated delay of 2 seconds
  }

  cancelBooking(id: number): void {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.bookingStatus = 'Cancelled'; // Change status to Cancelled
    }
  }

  // Function to update booking status based on the date
  updateBookingStatuses(): void {
    const currentDate = new Date();

    this.bookings.forEach(booking => {
      // If booking date has passed and status is still 'Pending', update to 'Completed'
      if (booking.bookingDate < currentDate && booking.bookingStatus === 'Pending') {
        booking.bookingStatus = 'Completed';
      }
    });
  }
}