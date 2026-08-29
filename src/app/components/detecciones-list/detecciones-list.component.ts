import { Component } from '@angular/core';

@Component({
  selector: 'app-detecciones-list',
  templateUrl: './detecciones-list.component.html',
  styleUrls: ['./detecciones-list.component.css']
})
export class DeteccionesListComponent {
  detecciones = [
    { placa: 'ABC123', hora: new Date(), imagen: 'placa1.jpg' },
    { placa: 'XYZ789', hora: new Date(), imagen: 'placa2.jpg' }
  ];
}
