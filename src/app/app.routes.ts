import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { CargarVideoComponent } from './pages/cargar-video/cargar-video.component';
import { DeteccionComponent } from './pages/deteccion/deteccion.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'registros',
        component: RegistrosComponent
    },
    {
        path: 'cargar-video',
        component: CargarVideoComponent
    },
    {   path: 'deteccion', 
        component: DeteccionComponent }
];
