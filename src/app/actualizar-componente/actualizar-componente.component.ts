import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleado2Service } from '../servicio-empleado2.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualizar-componente',
  templateUrl: './actualizar-componente.component.html',
  styleUrls: ['./actualizar-componente.component.css']
})
export class ActualizarComponenteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:ServicioEmpleado2Service) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    //asignamos a la varialbe indice el indice del obejto enviado
    this.indice=this.route.snapshot.params['id'];
    // creamos un objeto donde asignamos el objeto con el indice enviado
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    //asignamos las propiedades del objeto empleado a cada componente html de la pagina (formulario de inputs)
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario

  }

  volverHome(){
this.router.navigate(['']);
  }

  empleados:Empleado[]=[];

  cuadroNombre: string='';
  cuadroApellido: string='';
  cuadroCargo: string='';
  cuadroSalario: number=0;

  // agreamos una variable donde voy a almacenar el indice que paso por la url

  indice:number =0;

  //funcion para actualizar empleado que llega al formulario
  actualizaEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //Inyectamos el servicio antes que se agregue el emplado a la lista
    // this.miServicio.mostrarMensaje('Nombre del empleado: '+ miEmpleado.nombre + ' Apellido del empleado: '+miEmpleado.apellido)
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);

  }

}
