import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleado2Service } from '../servicio-empleado2.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleado2Service) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;

  }

  volverHome(){
this.router.navigate(['']);
  }

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
    this.router.navigate(['']);

  }

}
