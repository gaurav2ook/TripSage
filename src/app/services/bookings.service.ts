import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getBookings(): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return this.http.get(`${this.apiUrl}/packages/get-user-packages`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((response: any) => response)
    );
  }

  getBookingById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      tap((response: any) => response)
    );
  }
}
