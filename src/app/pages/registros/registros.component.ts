import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-registros',
  imports: [RouterModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrosComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
}
