import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private authService: AuthService) {}

  toggle() {
    const container = document.getElementById('container');
    container?.classList.toggle('active');
  }

  onSignup() {
    this.authService.signup(this.name, this.emailSignup, this.passwordSignup).subscribe({
      next: (res) => {
        console.log('Signup successful:', res);
        alert('Signup successful!');
      },
      error: (err) => {
        console.error('Signup error:', err);
        alert('Signup failed! Check console for details.');
      }
    });
  }

  onSignin() {
    this.authService.signin(this.emailSignin, this.passwordSignin).subscribe({
      next: (res) => {
        console.log('Signin successful:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        alert('Signin successful!');
      },
      error: (err) => {
        console.error('Signin error:', err);
        alert('Signin failed! Check console for details.');
      }
    });
  }
}
