import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private apiUrl = 'http://localhost:8080/api/add-trip'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  addTrip(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
