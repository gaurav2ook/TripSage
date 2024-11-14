import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Reservation {
  travelType: string;
  departure: string;
  arrival: string;
  travelDate: string;
  status: string;
  price: number;
}

@Component({
  selector: 'app-train-bus-reservation',
  templateUrl: './train-bus-reservation.component.html',
  styleUrls: ['./train-bus-reservation.component.css']
})
export class TrainBusReservationComponent implements OnInit {
  searchForm: FormGroup;
  reservations: Reservation[] = [];
  reservationHistory: Reservation[] = [];
  selectedReservation: Reservation | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      departureLocation: ['', Validators.required],
      arrivalLocation: ['', Validators.required],
      travelDate: ['', Validators.required],
      travelType: ['train', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load reservation history if available
    this.loadReservationHistory();
  }

  // Function to handle search form submission
  onSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }

    const { departureLocation, arrivalLocation, travelDate, travelType } = this.searchForm.value;

    // Mock reservation data for demonstration
    this.reservations = [
      {
        travelType,
        departure: departureLocation,
        arrival: arrivalLocation,
        travelDate,
        status: 'Available',
        price: Math.floor(Math.random() * 100) + 50 // Random price between 50-150
      }
    ];
  }

  // Function to select a reservation and open the modal
  selectReservation(reservation: Reservation): void {
    this.selectedReservation = reservation;
  }

  // Function to confirm a reservation
  confirmReservation(paymentMethod: string): void {
    if (this.selectedReservation) {
      this.selectedReservation.status = 'Confirmed';
      this.reservationHistory.push({ ...this.selectedReservation });
      this.saveReservationHistory();
      this.selectedReservation = null;
      alert('Reservation confirmed!');
    }
  }

  // Load reservation history from local storage
  loadReservationHistory(): void {
    if (this.isLocalStorageAvailable()) {
      const storedHistory = localStorage.getItem('reservationHistory');
      this.reservationHistory = storedHistory ? JSON.parse(storedHistory) : [];
    } else {
      console.warn('localStorage is not available.');
      this.reservationHistory = [];
    }
  }

  // Save reservation history to local storage
  saveReservationHistory(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('reservationHistory', JSON.stringify(this.reservationHistory));
    } else {
      console.warn('localStorage is not available. Unable to save reservation history.');
    }
  }

  // Check if localStorage is available
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Utility function to clear the selected reservation and close the modal
  closeModal(): void {
    this.selectedReservation = null;
  }
}
