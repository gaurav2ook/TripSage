import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetTrackerService {
  private apiUrl = 'http://localhost:8080/api/budget';

  constructor(private http: HttpClient) {}

  getBudget(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  addExpense(expenseData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/expense`, expenseData);
  }

  getExpenses(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/expenses/user/${userId}`);
  }
}
