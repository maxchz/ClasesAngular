import { TestBed } from '@angular/core/testing';

import { ServicioEmpleado2Service } from './servicio-empleado2.service';

describe('ServicioEmpleado2Service', () => {
  let service: ServicioEmpleado2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpleado2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
