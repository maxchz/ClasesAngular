import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo  = 'Listado de Empleados';

  empleados: Empleado[]=[
    new Empleado('Lucas','Lopez','Operario',3000),
    new Empleado('Pedro','Sancehz','RRHH',4000),
    new Empleado('Laura','Ferreyra','Ingeniera',5000),
    new Empleado('Sofia','Acros','Oficinista',2500),

  ];
  cuadroNombre: string='';
  cuadroApellido: string='';
  cuadroCargo: string='';
  cuadroSalario: number=0;

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

}

// 16 => 8:14
