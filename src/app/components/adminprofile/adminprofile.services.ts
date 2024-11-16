import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-management/user-management.component';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin'; // Base API URL

  constructor(private http: HttpClient) {}

  // Fetch all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // Fetch all bookings
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bookings`);
  }

  // Delete a user by ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${userId}`);
  }

  // Cancel a booking by ID
  cancelBooking(bookingId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/bookings/${bookingId}/cancel`, {});
  }

 // Create a trip package
createTripPackage(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/trip-packages`, data);
}

// Create a hotel package
createHotelPackage(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/hotel-packages`, data);
}

// Create a restaurant package
createRestaurantPackage(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/restaurant-packages`, data);
}
}