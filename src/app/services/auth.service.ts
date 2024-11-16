import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../components/user-management/user-management.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {}

  // Signup method for user registration
  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user).pipe(
      tap(response => {
        return response;
      })
    );
  }

  // Login method to authenticate user, store token and role
  login(email: string, password: string): Observable<{ token: string; role: string }> {
    return this.http.post<{ token: string; role: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        if(response.status === "success") {
          this.saveAuthData(response.data.token, response.data.role);  // Store token and role in localStorage
          this.redirectBasedOnRole(response.data.role);  // Redirect based on user role after login
        }
        return response;
      })
    );
  }

  // Save the token and role to localStorage (or sessionStorage for session-based authentication)
  private saveAuthData(token: string, role: string): void {
    sessionStorage.setItem('authToken', token);  // Use sessionStorage for session-specific data
    sessionStorage.setItem('userRole', role);
  }

  // Retrieve the stored token
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Retrieve the stored role
  getUserRole(): string | null {
    return sessionStorage.getItem('userRole');
  }

  // Check if the user has a specific role
  isUserRole(role: string): boolean {
    return this.getUserRole() === role;
  }

  // Logout functionality: clear auth data and navigate to login page
  logout(): void {
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  // Clear authentication data from sessionStorage (use sessionStorage for better security)
  private clearAuthData(): void {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userRole');
  }

  // Redirect based on role after successful login
  private redirectBasedOnRole(role: string): void {
    if (role === 'admin') {
      this.router.navigate(['/adminprofile']);
    } else if (role === 'user') {
      this.router.navigate(['/userprofile']);
    } else {
      this.router.navigate(['/login']);  // Fallback if role is undefined or invalid
    }
  }

  // Check if the user is logged in (token exists in sessionStorage)
  isLoggedIn(): boolean {
    return !!this.getToken();  // Checks if the token exists
  }

  // Ensure user has the proper role for a protected route
  canAccessProfile(): boolean {
    const role = this.getUserRole();
    return role === 'user' || role === 'admin';  // Modify based on your access needs
  }

  // Check if the token is expired by inspecting its expiration time
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    const payload = this.decodeToken(token);
    const expirationDate = new Date(payload.exp * 1000);  // Convert to milliseconds
    return expirationDate < new Date();  // Check if the token is expired
  }

  // Decode the JWT token and retrieve the payload (without verifying the signature)
  private decodeToken(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token');
    }
    const payload = atob(parts[1]);
    return JSON.parse(payload);  // Return the decoded payload
  }
}
