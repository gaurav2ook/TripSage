import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define types for User, Trip, and other entities if possible
export interface User {
  id: number;
  name: string;
  email: string;
  // other user fields
}

export interface Trip {
  id: number;
  tripName: string;
  tripDescription: string;
  tripPrice: number;
  // other trip fields
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin'; // API base URL

  constructor(private http: HttpClient) {}

  // Get all users (used to populate the user table)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // Get all trips (used to populate the trip table)
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}/trips`);
  }

  // Add a new user (used when adding a user)
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  // Add a new trip (used when adding a trip)
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.apiUrl}/trips`, trip);
  }

  // Delete a user by ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${userId}`);
  }

  // Delete a trip by ID
  deleteTrip(tripId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/trips/${tripId}`);
  }

  // Generate user activity report
  getReports(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reports`);
  }

  // Get user activity data (for report generation)
  getUserActivities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-activities`);
  }
}
