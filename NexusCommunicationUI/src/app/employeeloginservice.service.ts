import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeloginserviceService {

  constructor(public httpclient:HttpClient) { }

  checkLogin(employee:any):Observable<Employee>
  {
    return this.httpclient.post<Employee>("http://localhost:9070/vendor/chekLoginEmployee",employee);
  }
}
