import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractEmpleadoComponentComponent } from './caract-empleado-component.component';

describe('CaractEmpleadoComponentComponent', () => {
  let component: CaractEmpleadoComponentComponent;
  let fixture: ComponentFixture<CaractEmpleadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractEmpleadoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
