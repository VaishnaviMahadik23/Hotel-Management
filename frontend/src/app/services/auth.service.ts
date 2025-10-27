import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api';  // ✅ Your backend base URL

  constructor(private http: HttpClient) { }

  // 🧠 Signup
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // 🔐 Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // 💾 Save JWT Token
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // 🧭 Get Token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // 🚪 Logout
  logout() {
    localStorage.removeItem('authToken');
  }

  // ✅ Check if logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
