import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api'; // backend base URL

  constructor(private http: HttpClient) { }

  // Signup user
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  // Signin user
  signin(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, credentials);
  }

  // Store token in local storage
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Clear token (logout)
  logout(): void {
    localStorage.removeItem('token');
  }
}
