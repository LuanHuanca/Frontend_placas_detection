import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-control-camaras',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './control-camaras.component.html',
  styleUrls: ['./control-camaras.component.css']
})
export class ControlCamarasComponent {
  camaras = [
    {
      nombre: 'Cámara 1',
      ip: '192.168.0.10',
      ubicacion: 'Entrada principal',
      estado: 'activa',
      imagen: 'assets/imagen-camara-central.jpeg',
      descripcion:'Camara esta en la central'
    },
    {
      nombre: 'Cámara 2',
      ip: '192.168.0.11',
      ubicacion: 'Estacionamiento',
      estado: 'inactiva',
      imagen: '',
      descripcion:'Camara esta en el centro'
    }
  ];

  abrirCRUD() {
    // Aquí rediriges o abres un modal/crud
    console.log('Abrir CRUD para añadir cámara');
  }
}
