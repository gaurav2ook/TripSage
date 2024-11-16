import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = 'http://localhost:8080/api/users'; // Update with actual backend URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUserProfile(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  updateUserProfile(userId: string, profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, profileData);
  }
}
