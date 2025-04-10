import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getPackages(): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.get(`${this.apiUrl}/get-packages`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  getManualPackages(): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.get(`${this.apiUrl}/get-manual-packages`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  getUserPackages(): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.get(`${this.apiUrl}/get-user-packages`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  createPackage(pkg: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.post(`${this.apiUrl}/create-package`, pkg, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  createManualPackage(pkg: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.post(`${this.apiUrl}/create-manual-package`, pkg, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  bookHotelPackage(bookingData: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return this.http.post(`${this.apiUrl}/create-hotel-package`, bookingData, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((response) => response)
    );
  }

  bookRestaurantPackage(bookingData: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    return this.http.post(`${this.apiUrl}/create-restaurant-package`, bookingData, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  deletePackage(packageId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-package/${packageId}`);
  }
}
