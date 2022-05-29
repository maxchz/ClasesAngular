import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado/componente-hijo-empleado.component';
import { CaractEmpleadoComponentComponent } from './caract-empleado-component/caract-empleado-component.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ServicioEmpleado2Service } from './servicio-empleado2.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponenteComponent } from './actualizar-componente/actualizar-componente.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';



const appRoutes:Routes=[
{path:'',component:HomeComponentComponent},
{path:'proyectos', component:ProyectosComponentComponent},
{path:'quienes', component:QuienesComponentComponent},
{path:'contacto', component:ContactoComponentComponent},
{path:'actualizar/:id', component:ActualizarComponenteComponent},
{path:'**', component:ErrorPersonalizadoComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoEmpleadoComponent,
    CaractEmpleadoComponentComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizarComponenteComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, ServicioEmpleado2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
