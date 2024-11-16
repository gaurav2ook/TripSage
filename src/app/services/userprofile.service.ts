import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    const token = sessionStorage.getItem("authToken");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
      tap((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        console.error('Error fetching user profile:', error);
        return throwError('Failed to fetch user profile');
      })
    );
  }

  updateUserProfile(data: any): Observable<any> {
    const token = sessionStorage.getItem("authToken");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/update`, data, { headers });
  }
}
