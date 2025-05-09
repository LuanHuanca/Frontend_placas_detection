import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarFotoComponent } from './cargar-foto.component';

describe('CargarFotoComponent', () => {
  let component: CargarFotoComponent;
  let fixture: ComponentFixture<CargarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargarFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
