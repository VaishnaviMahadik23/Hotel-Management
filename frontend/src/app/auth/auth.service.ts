import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000/api'; // change if your backend URL is different

  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { name, email, password });
  }

  signin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, { email, password });
  }
}
