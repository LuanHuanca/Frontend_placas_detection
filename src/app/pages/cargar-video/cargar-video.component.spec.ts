import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarVideoComponent } from './cargar-video.component';

describe('CargarVideoComponent', () => {
  let component: CargarVideoComponent;
  let fixture: ComponentFixture<CargarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargarVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
