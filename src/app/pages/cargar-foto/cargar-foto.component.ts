import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-cargar-foto',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './cargar-foto.component.html',
  styleUrls: ['./cargar-foto.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CargarFotoComponent {
  file: File | null = null;
  fileName: string = '';
  previewUrl: string | null = null;
  processedImageUrl: string | null = null;
  placas: string[] = [];
  isLoading: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;

      // Generar vista previa
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.file);
    }
  }

  cancel(): void {
    this.file = null;
    this.fileName = '';
    this.previewUrl = null;
    this.processedImageUrl = null;
    this.placas = [];
  }

upload(): void {
  if (!this.file) return;

  this.isLoading = true;
  this.processedImageUrl = null; // Limpiar imagen procesada anterior
  this.placas = []; // Limpiar placas anteriores

  const formData = new FormData();
  formData.append('file', this.file);

  this.http.post<any>('http://127.0.0.1:8000/detecciones/procesar-imagen', formData).subscribe(
    (response) => {
      console.log('Respuesta del servidor:', response);
      
      // Actualizar imagen procesada
      if (response.image) {
        this.processedImageUrl = `http://127.0.0.1:8000${response.image}?t=${Date.now()}`;
      }

      // Actualizar placas
      this.placas = Array.isArray(response.placas) ? response.placas : [];
      this.isLoading = false;
    },
    (error) => {
      console.error('Error al subir la imagen:', error);
      this.isLoading = false;
    }
  );
}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
