import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantBookingService {

  private apiUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient, private router: Router) { }

  searchRestaurants(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria).pipe(
      tap((response: any) => response)
    );
  }

  bookRestaurant(restaurant: any): Observable<any> {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
    return this.http.post(`${this.apiUrl}/book`, restaurant, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((response: any) => response)
    );
  }
}
