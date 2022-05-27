import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado.component';

describe('ComponenteHijoEmpleadoComponent', () => {
  let component: ComponenteHijoEmpleadoComponent;
  let fixture: ComponentFixture<ComponenteHijoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHijoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
