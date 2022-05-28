import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleado2Service } from './servicio-empleado2.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo  = 'Listado de Empleados';

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

  //Creamos el constructor para que se pueda inyectar los servicios que usemos en la App
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleado2Service){
    //asignamos a la variable empleados los datos provenietes del servicio
    // this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
       this.empleados=this.empleadosService.empleados;

  }

}

// 16 => 8:14
