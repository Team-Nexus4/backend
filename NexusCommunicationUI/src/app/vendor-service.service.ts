import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.model';
import { OrderStock } from './orderstock.model';
import { Employee } from './employee.model';
import { Retailer } from './retailer.model';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  employee = new Employee;

  constructor(public httpClient:HttpClient) { }

  getVendor():Observable<Vendor[]>{
   return this.httpClient.get<Vendor[]>("http://localhost:9070/vendor/allVendor")
  }

  addVendor(VendorRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9070/vendor/addVendor",VendorRef,{responseType:"text"})
   }

   updateInternetStock(InternetKit:any){
    
      return this.httpClient.put("http://localhost:9070/vendor/updateInternetKit",InternetKit,{responseType:'text'})
  
   }

   updateLandlineStock(LandlineKit:any){
    
    return this.httpClient.put("http://localhost:9070/vendor/updateLandineKit",LandlineKit,{responseType:'text'})
  }

  

}
