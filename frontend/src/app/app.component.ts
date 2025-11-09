import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
imports: [FormsModule, CommonModule, HttpClientModule];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, FormsModule],
  template: `<app-auth></app-auth>`
})
export class AppComponent { }
