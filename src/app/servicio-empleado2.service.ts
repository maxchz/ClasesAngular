import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleado2Service {

  empleados: Empleado[]=[
    new Empleado('Lucas','Lopez','Operario',3000),
    new Empleado('Pedro','Sancehz','RRHH',4000),
    new Empleado('Laura','Ferreyra','Ingeniera',5000),
    new Empleado('Sofia','Acros','Oficinista',2500),

  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);

  }

  constructor() { }
}
