import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private mapsApiUrl = 'https://maps.googleapis.com/maps/api'; // Replace with actual maps API URL and key

  constructor(private http: HttpClient) {}

  getNearbyPlaces(location: any): Observable<any> {
    const params = { location, radius: '500', type: 'tourist_attraction', key: 'YOUR_GOOGLE_MAPS_API_KEY' };
    return this.http.get(`${this.mapsApiUrl}/place/nearbysearch/json`, { params });
  }
}
