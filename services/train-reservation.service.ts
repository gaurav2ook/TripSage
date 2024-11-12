import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainReservationService {
  private apiUrl = 'http://localhost:8080/api/trains';

  constructor(private http: HttpClient) {}

  searchTrains(criteria: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, { params: criteria });
  }

  bookTrain(bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, bookingData);
  }
}
