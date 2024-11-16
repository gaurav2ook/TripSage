import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingService {

  private apiUrl = 'http://localhost:8080/api/flights';

  constructor(private http: HttpClient, private router: Router) { }

  searchFlights(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria).pipe(
      tap((response: any) => response)
    );
  }

  bookFlight(flight: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return this.http.post(`${this.apiUrl}/book`, flight, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((response: any) => response)
    );
  }
}
