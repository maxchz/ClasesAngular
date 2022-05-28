import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

//Para usar servicios anidados debemos usar el decorador @Injectable y  usar el constructor
@Injectable()
export class ServicioEmpleado2Service {

  empleados: Empleado[]=[
    new Empleado('Lucas','Lopez','Operario',3000),
    new Empleado('Pedro','Sancehz','RRHH',4000),
    new Empleado('Laura','Ferreyra','Ingeniera',5000),
    new Empleado('Sofia','Acros','Oficinista',2500),

  ];

  agregarEmpleadoServicio(empleado:Empleado){
    //llamamos la servicio para mostrar la ventana emergente
    this.servicioVentanaEmergente.mostrarMensaje(
      'La perona que va a agregar es: '+ empleado.nombre + ' '+empleado.apellido + '\n'
    + 'Con un slaario de: '+empleado.salario+'\n'
    + 'Su cargo es: '+empleado.cargo);
    this.empleados.push(empleado);

  }

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }
}
