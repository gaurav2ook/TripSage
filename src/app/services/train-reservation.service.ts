import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainReservationService {
  private apiUrl = 'http://localhost:8080/api/trains';

  constructor(private http: HttpClient, private router: Router) { }

  searchTrains(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria).pipe(
      tap((response: any) => response)
    );
  }

  bookTrain(bookingData: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return this.http.post(`${this.apiUrl}/book`, bookingData, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((response: any) => response)
    );
  }
}
