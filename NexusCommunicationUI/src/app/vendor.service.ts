import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(public httpClient:HttpClient) { }

  loadvendordetails():Observable<Vendor[]>
  {
    return this.httpClient.get<Vendor[]>("http://localhost:9070/vendor/allVendor");
  }
}
