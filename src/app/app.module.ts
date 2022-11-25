import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { NavComponent } from './nav/nav.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadosComponent,
    GruposComponent,
    NavComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
