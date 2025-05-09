import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Camara {
  id?: number;
  nombre: string;
  ip: string;
  ubicacion: string;
  estado: string;
  imagen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CamarasService {
  private apiUrl = 'http://175.1.68.229:8000/camaras'; // o la URL de tu servidor

  constructor(private http: HttpClient) {}

  getCamaras(): Observable<Camara[]> {
    return this.http.get<Camara[]>(this.apiUrl);
  }

  crearCamara(camara: Camara): Observable<Camara> {
    return this.http.post<Camara>(this.apiUrl, camara);
  }
}
