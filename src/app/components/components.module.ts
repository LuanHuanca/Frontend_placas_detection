import { NgModule } from '@angular/core';
import { VideoStreamComponent } from './video-stream/video-stream.component';
import { DeteccionesListComponent } from './detecciones-list/detecciones-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    VideoStreamComponent,
    DeteccionesListComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    VideoStreamComponent,
    DeteccionesListComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule {}

