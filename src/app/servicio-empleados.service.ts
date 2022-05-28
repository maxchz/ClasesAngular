import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  // MEtodo para mostrat mensaje, que se injectara en los elemntos padre y nieto
  mostrarMensaje(mensaje:string){
    alert(mensaje);

  }
}
