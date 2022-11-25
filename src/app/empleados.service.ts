import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empleados } from './interface/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


private API= "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees";
 
constructor(private http:HttpClient){}

getAllEmpleados():Observable<any>{
  const path=`${this.API}/donald/`;
  return this.http.get<Empleados>(path);
}
createEmpleados(Empleados:Empleados){
  const path=`${this.API}/donald/`;
  return this.http.post(path,Empleados);
}

updateEmpleados(empleados:Empleados){
  const path=`${this.API}/donald/${empleados.id}`;
  return this.http.put<Empleados>(path,empleados);
}

delateEmpleados(id: String){
  const path =`${this.API}/donald/${id}`;
  return this.http.delete(path)
}

}
