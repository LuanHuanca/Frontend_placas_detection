import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-deteccion',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './deteccion.component.html',
  styleUrl: './deteccion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeteccionComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
}
