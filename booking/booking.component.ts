import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  isLoading = false;
  isNavbarOpen = false;
  isDropdownOpen = false;
  searchQuery = '';
  
  booking = {
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0
  };

  adultOptions = [1, 2, 3];
  childOptions = [0, 1, 2];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSearchSubmit() {
    console.log('Search query:', this.searchQuery);
  }

  onBookingSubmit() {
    console.log('Booking information:', this.booking);
  }

}
