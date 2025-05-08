import { Routes } from '@angular/router';
import path from 'path';
import { RegistrosComponent } from './pages/registros/registros.component';
import { CargarVideoComponent } from './pages/cargar-video/cargar-video.component';

export const routes: Routes = [
    {
        path: 'registros',
        component: RegistrosComponent
    },
    {
        path: 'cargar-video',
        component: CargarVideoComponent
    }
];
