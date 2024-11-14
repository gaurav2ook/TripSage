import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailComponent implements OnInit {
  tripDetails: any;

  constructor(private location: Location) {
    // Retrieve trip details passed via navigation
    const navigation = this.location.getState();
    this.tripDetails = ['tripDetails'];
  }

  ngOnInit(): void {}

  // Method to navigate to the payment page
  proceedToPayment() {
    // Implement the logic to navigate to payment page
  }
}
