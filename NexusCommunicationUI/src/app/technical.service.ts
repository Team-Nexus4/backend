import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import {Technical} from'./technical.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(public httpClient:HttpClient) { }

  loadTechnicalDetails():Observable<Technical[]>{
    return this.httpClient.get<Technical[]>("http://localhost:9070/technical/display")
  }

  addTechnicalInfo(technicalRef:any):Observable<string>
  {
    return this.httpClient.post("http://localhost:9070/technical/addTechnical",technicalRef,{responseType:'text'});
  }

  updateStatusInfo(oId:Order):Observable<string>
  {
    return this.httpClient.post("http://localhost:9070/technical/placeOrderByTechnical",oId,{responseType:'text'});
  }
}
