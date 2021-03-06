import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee.model";
import { Order } from "./order.model";
import { Retailer } from './retailer.model';

@Injectable({
    providedIn: 'root'
  })
  export class RetailerService
  {
    retailerPlaceOrder(ret_orderRef: any):Observable<string>
    {
      return this.httpClient.post("http://localhost:9070/retailer/placeOrder",ret_orderRef,{responseType:'text'})
    }
  
    constructor(public httpClient:HttpClient) { }

    findRetailerById(rId:any):Observable<Order[]>{
      return this.httpClient.get<Order[]>("http://localhost:9070/retailer/display/"+rId,{responseType:'json'});
    }
    
    replaceRetailerInfo(employee:any):Observable<string>
    {
        return this.httpClient.post("http://localhost:9070/retailer/replaceRetailer",employee,{responseType:'text'})
    }
  }