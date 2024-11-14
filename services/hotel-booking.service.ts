import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingService {
  private apiUrl = 'http://localhost:8080/api/hotels';

  constructor(private http: HttpClient) {}

  searchHotels(criteria: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, { params: criteria });
  }

  getHotelDetails(hotelId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${hotelId}`);
  }

  bookHotel(bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, bookingData);
  }
}
