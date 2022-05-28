import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caract-empleado-component',
  templateUrl: './caract-empleado-component.component.html',
  styleUrls: ['./caract-empleado-component.component.css']
})
export class CaractEmpleadoComponentComponent implements OnInit {
//DEcorador @Output, linea de codigo para flujo de datos de hijo a padre
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  //Injectamos el servicio en el constructor
  constructor(private miServicio:ServicioEmpleadosService) {

  };

  agregaCaracteristica(value:string){
    //agregamos la ventana emergente nates que agregen las caracteristicas al componente placeholder
    this.miServicio.mostrarMensaje(value);

    this.caracteristicasEmpleado.emit(value);
  };


  ngOnInit(): void {
  }

}
