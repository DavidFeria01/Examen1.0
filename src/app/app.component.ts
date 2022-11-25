import { Component } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Examen1.0';

  constructor(private service_emp: EmpleadosService) {
  }

  getAllEmpleados() {
    this.service_emp.getAllEmpleados().subscribe(Empleados => {
      console.log(Empleados);
    })
  }

  createEmpleados() {
    const Empleados = {
      name: 'David',
      last_name: 'Feria Ortiz',
      birthday : 'date:yyyy/mm/dd'
      
    };
    this.service_emp.createEmpleados(Empleados)
      .subscribe((newEmpleados) => {
        console.log(newEmpleados);
      });
  }

  updateEmpleados(){
    const Empleados = {
      id:'1',
      name:'Yael',
      last_name:'Sanchez',
      birthday : 'date :2022/11/25'
    };
    this.service_emp.updateEmpleados(Empleados).subscribe(donald=>{
      console.log(donald);
    })
  }

  delateEmpleados(){
    this.service_emp.delateEmpleados('1').subscribe(
      (data) =>{
        console.log(data);
      }
    )
  }



}
