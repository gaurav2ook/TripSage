import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get(`${this.apiUrl}/get-reviews`, { headers });
  }

  addReview(review: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.post(`${this.apiUrl}/save-reviews`, review, { headers });
  }
}
