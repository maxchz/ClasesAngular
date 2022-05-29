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
//metodo encargado de encontrar el objeto empleado de acuerdo al indice que se pasa como argumento
  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  //metodo o servicio para actualizar empleado
  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }
  //metodo o servicio para eliminar un empleado
  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }



  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }
}
