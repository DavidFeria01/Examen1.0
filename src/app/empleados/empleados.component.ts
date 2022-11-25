import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleados } from '../interface/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleado:any[]=[];


  constructor(public service_emp: EmpleadosService) { }

  ngOnInit(){
    this.service_emp.getAllEmpleados();
  }
  getAllEmpleados() {
    this.service_emp.getAllEmpleados().subscribe(Empleados => {
      console.log(Empleados);
      this.empleado=[Empleados];
    });
  }

}
