import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private apiUrl = 'http://your-api-url-here'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Get all packages
  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/packages`);
  }

  // Delete a specific package
  deletePackage(packageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/packages/${packageId}`);
  }
}