import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caract-empleado-component',
  templateUrl: './caract-empleado-component.component.html',
  styleUrls: ['./caract-empleado-component.component.css']
})
export class CaractEmpleadoComponentComponent implements OnInit {
//DEcorador @Output, linea de codigo para flujo de datos de hijo a padre
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristica(value:string){

    this.caracteristicasEmpleado.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
