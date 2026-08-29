import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCamarasComponent } from './control-camaras.component';

describe('ControlCamarasComponent', () => {
  let component: ControlCamarasComponent;
  let fixture: ComponentFixture<ControlCamarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCamarasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCamarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
