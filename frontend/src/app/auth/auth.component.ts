import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  toggle() {
    const container = document.getElementById('container');
    container?.classList.toggle('active');
  }

  onSignup() {
    console.log('Sign Up:', this.name, this.emailSignup, this.passwordSignup);
  }

  onSignin() {
    console.log('Sign In:', this.emailSignin, this.passwordSignin);
  }
}
