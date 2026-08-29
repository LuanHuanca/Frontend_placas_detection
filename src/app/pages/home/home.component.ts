import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule 
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
}