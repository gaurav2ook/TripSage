
import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service';

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

  constructor(private packagesService: PackagesService) {}

  ngOnInit(): void {

    this.packagesService.getUserPackages().subscribe(data => {
      this.isLoading = false;
      for (let booking of data) {
        if(booking.type === 'hotel') {  
          this.bookings.push({
            id: booking.Id,
            bookingType: booking.type,
            details: booking.data.name + " at " + booking.data.location,
            bookingDate: booking.data.date,
            bookingStatus: "Completed"
          });
        } else if(booking.type === 'restaurant') {
          this.bookings.push({
            id: booking.Id,
            bookingType: booking.type,
            details: booking.data.name + " at " + booking.data.location,
            bookingDate: booking.data.date,
            bookingStatus: "Completed"
          });
        } else if(booking.type === 'flight') {
          this.bookings.push({
            id: booking.Id,
            bookingType: booking.type,
            details: booking.data.name + " - " + booking.data.type, 
            bookingDate: booking.data.date,
            bookingStatus: "Completed"
          });
        } else if(booking.type === 'train') {
          this.bookings.push({
            id: booking.Id,
            bookingType: booking.type,
            details: booking.data.name + " - " + booking.data.stops,
            bookingDate: booking.data.date,
            bookingStatus: "Completed"
          });
        }
      }
    });

    // setTimeout(() => {
    //   this.bookings = [
    //     {
    //       id: 1,
    //       bookingType: 'Hotel',
    //       details: 'Hotel stay at Seaside Resort',
    //       bookingDate: new Date('2023-12-10'),
    //       bookingStatus: 'Pending'
    //     },
    //     {
    //       id: 2,
    //       bookingType: 'Flight',
    //       details: 'Flight to Paris',
    //       bookingDate: new Date('2024-01-15'),
    //       bookingStatus: 'Pending'
    //     }
    //   ];

    //   // Update booking statuses automatically
    //   this.updateBookingStatuses();

    //   this.isLoading = false;
    // }, 2000); // Simulated delay of 2 seconds
  }

  // Function to update booking status based on the date
  // updateBookingStatuses(): void {
  //   const currentDate = new Date();

  //   this.bookings.forEach(booking => {
  //     // If booking date has passed and status is still 'Pending', update to 'Completed'
  //     if (booking.bookingDate < currentDate && booking.bookingStatus === 'Pending') {
  //       booking.bookingStatus = 'Completed';
  //     }
  //   });
  // }
}
