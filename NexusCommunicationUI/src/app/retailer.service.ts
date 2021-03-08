import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee.model";
import { Order } from "./order.model";
import { OrderStock } from "./orderstock.model";
import { Retailer } from './retailer.model';

@Injectable({
    providedIn: 'root'
  })
  export class RetailerService
  {
    employee = new Employee;
    retailerPlaceOrder(ret_orderRef: Order):Observable<string>
    {
      return this.httpClient.post("http://localhost:9070/retailer/placeOrder",ret_orderRef,{responseType:'text'})
    }

    retailerPlaceOrderStock(orderstock:OrderStock):Observable<string>
    {
      return this.httpClient.post("http://localhost:9070/retailer/placeOrderStock",orderstock,{responseType:'text'})
    }
  
    constructor(public httpClient:HttpClient) { }

    findRetailerById():Observable<Order[]>{
      let emp = sessionStorage.getItem("employee")
      if(emp!=null)
      {
          this.employee = JSON.parse(emp);
      }
      return this.httpClient.get<Order[]>("http://localhost:9070/retailer/display/"+this.employee.eid,{responseType:'json'});
    }

    findRetailer():Observable<Retailer[]>
    {
      let emp=sessionStorage.getItem("employee")
      if(emp!=null)
      {
          this.employee = JSON.parse(emp);
      }
      return this.httpClient.get<Retailer[]>("http://localhost:9070/retailer/displayRetailer/"+this.employee.eid,{responseType:"json"});
    }
    
    replaceRetailerInfo(employee:any):Observable<string>
    {
        return this.httpClient.post("http://localhost:9070/retailer/replaceRetailer",employee,{responseType:'text'})
    }

    

    getRetailer():Observable<Retailer[]>{
     return this.httpClient.get<Retailer[]>("http://localhost:9070/retailer/display")
    }
  
    addRetailer(RetailerRef:any):Observable<string>{
      return this.httpClient.post("http://localhost:9070/retailer/addRetailer",RetailerRef,{responseType:"text"})
     }
  
     
  


    
  }