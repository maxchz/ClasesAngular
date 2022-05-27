import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-componente-hijo-empleado',
  templateUrl: './componente-hijo-empleado.component.html',
  styleUrls: ['./componente-hijo-empleado.component.css']
})
export class ComponenteHijoEmpleadoComponent implements OnInit {
  // Usamos la directiva @input para indicar que se prepare para recibir dos datos con los nombres indicados en el componente padre

  @Input() empleadoLista:Empleado;
  @Input() indice: number;


  // Variable y metodo para Decorador @Output, flujo de hijo a padre

  caracteristicas: string[]=[''];

  agregaCarac(nuevaCarac:string){
    this.caracteristicas.push(nuevaCarac);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
