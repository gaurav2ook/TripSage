import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-itinerary-management',
  templateUrl: './itinerary-management.component.html',
  styleUrl: './itinerary-management.component.css'
})
export class ItineraryManagementComponent {

  currentStep: number = 1;
  bookingDetails: any = {
    currentLocation: '',
    destination: '',
    flight: null,
    hotel: null,
    train: null,
    restaurant: null,
  };

  // Method to move to the next booking step
  nextStep() {
    this.currentStep++;
  }

  // Method to go back to the previous booking step
  prevStep() {
    this.currentStep--;
  }

  // Method to finalize and add to future trips
  finalizeBooking() {
    // Logic to save booking to future trips can go here
    console.log("Booking finalized:", this.bookingDetails);
    alert("Booking added to future trips!");
  }

}
