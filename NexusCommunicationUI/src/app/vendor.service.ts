import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { OrderStock } from './orderstock.model';
import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  employee=new Employee;
  constructor(public httpClient:HttpClient) { }

  loadvendordetails():Observable<Vendor[]>
  {
    return this.httpClient.get<Vendor[]>("http://localhost:9070/vendor/allVendor");
  }

  findVendorById():Observable<Vendor[]>
  {
    let emp = sessionStorage.getItem("employee")
      if(emp!=null)
      {
          this.employee = JSON.parse(emp);
      }
      return this.httpClient.get<Vendor[]>("http://localhost:9070/vendor/displayVendor/"+this.employee.eid,{responseType:'json'});
  }

  viewOrder():Observable<OrderStock[]>
  {
    let emp=sessionStorage.getItem("employee")
      if(emp!=null)
      {
          this.employee = JSON.parse(emp);
      }
      return this.httpClient.get<OrderStock[]>("http://localhost:9070/vendor/displayOrdersbyVid/"+this.employee.eid,{responseType:"json"});
  }

  vendorFulfillOrder(os:OrderStock):Observable<string>
  {
    return this.httpClient.post("http://localhost:9070/vendor/fulfillOrder",os,{responseType:"text"})
  }
}
