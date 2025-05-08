import { Routes } from '@angular/router';
import { CargarVideoComponent } from './pages/cargar-video/cargar-video.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cargar-video', pathMatch: 'full' },
  { path: 'cargar-video', component: CargarVideoComponent }
];
