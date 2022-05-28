import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado/componente-hijo-empleado.component';
import { CaractEmpleadoComponentComponent } from './caract-empleado-component/caract-empleado-component.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ServicioEmpleado2Service } from './servicio-empleado2.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoEmpleadoComponent,
    CaractEmpleadoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService, ServicioEmpleado2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
