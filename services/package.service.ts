import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://your-backend-api-url/api/packages'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  /**
   * Fetch all packages from the backend API
   * @returns Observable<any[]> An observable containing an array of packages
   */
  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Add a new package
   * @param newPackage The package details to be added
   * @returns Observable<any> Response from the backend after adding the package
   */
  addPackage(newPackage: { name: string; description: string; price: number; duration: string; destination: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, newPackage).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Delete a package by ID
   * @param packageId The ID of the package to be deleted
   * @returns Observable<any> Response from the backend after deleting the package
   */
  deletePackage(packageId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${packageId}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Error handler for HTTP requests
   * @param error The HTTP error response
   * @returns Observable that throws a user-friendly error message
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMsg: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMsg = `An error occurred: ${error.error.message}`;
    } else {
      // Backend error response
      errorMsg = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    console.error(errorMsg); // Log error to the console
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
