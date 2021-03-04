import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.module';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public httpclient:HttpClient) { }
  
  checkLogin(customer:any):Observable<Customer>
  {
    return this.httpclient.post<Customer>("http://localhost:9070/customer/loginCustomer/",customer);
  }

}
