import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf, NgClass],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  // Sign up form
  name: string = '';
  emailSignup: string = '';
  passwordSignup: string = '';

  // Sign in form
  emailSignin: string = '';
  passwordSignin: string = '';

  // Message for user feedback
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  toggle() {
    const container = document.getElementById('container');
    container?.classList.toggle('active');
    this.message = '';
  }

  onSignup() {
    if (!this.name || !this.emailSignup || !this.passwordSignup) {
      this.message = 'Please fill all fields';
      this.messageType = 'error';
      return;
    }

    this.http.post(`${this.apiUrl}/signup`, {
      name: this.name,
      email: this.emailSignup,
      password: this.passwordSignup
    }).subscribe({
      next: (res: any) => {
        this.message = res.message || 'Signup successful! You can now sign in.';
        this.messageType = 'success';
        setTimeout(() => this.toggle(), 1000);
      },
      error: (err) => {
        this.message = err.error?.message || 'Signup failed. Please try again.';
        this.messageType = 'error';
      }
    });
  }

  onSignin() {
    if (!this.emailSignin || !this.passwordSignin) {
      this.message = 'Please fill all fields';
      this.messageType = 'error';
      return;
    }

    this.http.post(`${this.apiUrl}/signin`, {
      email: this.emailSignin,
      password: this.passwordSignin
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.message = res.message || 'Signin successful!';
        this.messageType = 'success';
      },
      error: (err) => {
        this.message = err.error?.message || 'Invalid email or password.';
        this.messageType = 'error';
      }
    });
  }
}
