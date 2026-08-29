import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.css']
})
export class VideoStreamComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef;

  ngAfterViewInit(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
      })
      .catch(err => {
        console.error('Error al acceder a la cámara:', err);
      });
  }
}
