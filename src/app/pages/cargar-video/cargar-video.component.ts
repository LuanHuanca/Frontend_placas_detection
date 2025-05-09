import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@Component({
  selector: 'app-cargar-video',
  standalone: true,
  
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './cargar-video.component.html',
  styleUrls: ['./cargar-video.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CargarVideoComponent {
  file: File | null = null;
  fileName: string = '';
  constructor(private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
    }
  }

  cancel(): void {
    this.file = null;
    this.fileName = '';
  }

  upload(): void {
    if (this.file) {
      console.log('Archivo listo para enviar:', this.file.name);
      // Aquí iría la lógica para enviar al backend
    }
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
