import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamarasService, Camara } from '../../services/camaras.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-camaras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-camaras.component.html',
  styleUrls: ['./control-camaras.component.css']
})
export class ControlCamarasComponent implements OnInit {
  camaras: Camara[] = [];
  mostrarModal = false;

  nuevaCamara: Camara = {
    nombre: '',
    ip: '',
    ubicacion: '',
    estado: 'activa',
    imagen: '',
    descripcion: ''
  };

  constructor(private camarasService: CamarasService) {}

  ngOnInit(): void {
    this.cargarCamaras();
  }

  cargarCamaras(): void {
    this.camarasService.getCamaras().subscribe(data => {
      this.camaras = data;
    });
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.nuevaCamara = {
      nombre: '',
      ip: '',
      ubicacion: '',
      estado: 'activa',
      imagen: '',
      descripcion: ''
    };
  }

  guardarCamara(): void {
    this.camarasService.crearCamara(this.nuevaCamara).subscribe(() => {
      this.cargarCamaras();
      this.cerrarModal();
    });
  }
}
