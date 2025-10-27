import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, FormsModule],
  template: `<app-auth></app-auth>`
})
export class AppComponent { }
