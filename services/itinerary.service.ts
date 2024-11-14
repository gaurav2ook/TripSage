import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl = 'http://localhost:8080/api/itinerary';

  constructor(private http: HttpClient) {}

  getItineraries(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  createItinerary(itineraryData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, itineraryData);
  }

  updateItinerary(itineraryId: string, itineraryData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${itineraryId}`, itineraryData);
  }

  deleteItinerary(itineraryId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${itineraryId}`);
  }
}
