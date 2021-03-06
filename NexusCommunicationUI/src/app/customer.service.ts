import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.module';
import { Internet } from './internet.module';
import { LandLine } from './landline.module';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public httpclient:HttpClient) { }

  deleteCustomer(cid:any):Observable<string>
  {
    return this.httpclient.delete("http://localhost:9070/customer/deleteCustomer/"+cid,{responseType:'text'});
  }

  getAllCustomer():Observable<Customer[]>
  {
    return this.httpclient.get<Customer[]>("http://localhost:9070/customer/displayCustomer");
  }

  getAllCustomerPlan(cid:any):Observable<Order[]>
  {
    
    return this.httpclient.get<Order[]>("http://localhost:9070/customer/displayCustomersPlan/"+cid);
  }

  getAllLandLinePlan():Observable<LandLine[]>
  {
    return this.httpclient.get<LandLine[]>("http://localhost:9070/connection/landlinePlan");
  }

  getInternetPlan():Observable<Internet[]>
  {
    return this.httpclient.get<Internet[]>("http://localhost:9070/nexusInternet/display");
  }

  placeLandlineOrder(lid:any):Observable<string>
  {
    let cid = sessionStorage.getItem("customer");
    if(cid!=null)
    {
      var customer = JSON.parse(cid);
      
    }
    else
    {}
    return this.httpclient.get("http://localhost:9070/customer/orderCustomer/"+customer.cid+"/"+customer.pincode+"/"+lid,{responseType:'text'});
    
  }

  addCustomer(customer:Customer):Observable<string>
  {
    return this.httpclient.post("http://localhost:9070/customer/storeCustomer/",customer,{responseType:'text'})
  }

  updateCustomer(customer:Customer):Observable<string>
  {
    return this.httpclient.put("http://localhost:9070/customer/updateCustomer",customer,{responseType:'text'})
  }
}
