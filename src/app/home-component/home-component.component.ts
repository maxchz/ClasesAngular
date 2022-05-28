import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleado2Service } from '../servicio-empleado2.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo  = 'Listado de Empleados';


  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleado2Service) {
        // this.empleados=this.empleadosService.empleados;

   }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;

  }
  // variable donde se almacenara los datos provenientes del servicio DAta service inyectado
  empleados:Empleado[]=[];

  cuadroNombre: string='';
  cuadroApellido: string='';
  cuadroCargo: string='';
  cuadroSalario: number=0;

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //Inyectamos el servicio antes que se agregue el emplado a la lista
    // this.miServicio.mostrarMensaje('Nombre del empleado: '+ miEmpleado.nombre + ' Apellido del empleado: '+miEmpleado.apellido)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

}
