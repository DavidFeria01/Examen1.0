import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleados } from '../interface/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{

  empleado:Empleados[];


  constructor(public service_emp: EmpleadosService) { }

  ngOnInit(){
  
  }
  getAllEmpleados() {
    this.service_emp.getAllEmpleados().subscribe(data => {
      console.log(Empleados);
      this.empleado=[];
      this.empleado.push(data);
    });
  }

}
