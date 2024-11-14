import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

// User interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Trip interface
interface Trip {
  tripId: number;
  destination: string;
  date: string;
  price: number;
  tripName?: string;     // Optional field (if it exists)
  tripDescription?: string; // Optional field (if it exists)
  tripPrice?: number; 
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // User and trip data
  users: User[] = [];
  trips: Trip[] = [];

  // Form data for adding a new user or trip
  userForm!: FormGroup;
  tripForm!: FormGroup;

  // Report result display
  reportResult: string = '';

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    // Initialize forms
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.tripForm = this.fb.group({
      destination: ['', [Validators.required]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
    });

    // Fetch users and trips from the backend
    this.fetchUsers();
    this.fetchTrips();
  }

  // Check if the user is an admin (implement JWT or role logic here)
  isAdmin(): boolean {
    // Placeholder: Implement real admin check based on user role
    return true; // Return true or false based on the user role (e.g., from a JWT token)
  }

  // Fetch user data (replace with real API request)
  fetchUsers(): void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Fetch trip data (replace with real API request)
  fetchTrips(): void {
    this.adminService.getTrips().subscribe(data => {
    
    });
  }

  // Open modal for adding a user (replace with real modal logic)
  openUserModal(): void {
    // Placeholder for modal opening logic, for example:
    // $('#addUserModal').modal('show');
  }

  // Open modal for adding a trip (replace with real modal logic)
  openTripModal(): void {
    // Placeholder for modal opening logic, for example:
    // $('#addTripModal').modal('show');
  }

  // Add a new user
  addUser(): void {
    if (this.userForm.valid) {
      const nextId = this.users.length ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
      const newUser = { id: nextId, ...this.userForm.value };
      this.adminService.addUser(newUser).subscribe(response => {
        this.users.push(response);  // Add user to list after successful API response
        this.userForm.reset(); // Reset form after submission
        console.log('User added:', newUser);
      });
    } else {
      console.log('User form is invalid');
    }
  }

  // Add a new trip
  addTrip(): void {
    if (this.tripForm.valid) {
      const nextTripId = this.trips.length ? Math.max(...this.trips.map(trip => trip.tripId)) + 1 : 101;
      const newTrip = { tripId: nextTripId, ...this.tripForm.value };
      this.adminService.addTrip(newTrip).subscribe(response => {
        this.trips.push();  // Add trip to list after successful API response
        this.tripForm.reset(); // Reset form after submission
        console.log('Trip added:', newTrip);
      });
    } else {
      console.log('Trip form is invalid');
    }
  }

  // Delete a user by ID
  deleteUser(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
      console.log('User deleted:', userId);
    });
  }

  // Delete a trip by ID
  deleteTrip(tripId: number): void {
    this.adminService.deleteTrip(tripId).subscribe(() => {
      this.trips = this.trips.filter(trip => trip.tripId !== tripId);
      console.log('Trip deleted:', tripId);
    });
  }

  // Generate reports (placeholder logic, replace with real backend call)
  generateReports(): void {
    this.adminService.getReports().subscribe(report => {
      this.reportResult = report;
      console.log('Report generated');
    });
  }
}
