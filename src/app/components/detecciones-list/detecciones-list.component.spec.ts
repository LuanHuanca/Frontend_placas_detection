import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteccionesListComponent } from './detecciones-list.component';

describe('DeteccionesListComponent', () => {
  let component: DeteccionesListComponent;
  let fixture: ComponentFixture<DeteccionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeteccionesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeteccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
