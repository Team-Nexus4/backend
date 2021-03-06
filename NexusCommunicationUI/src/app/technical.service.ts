import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Technical} from'./technical.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(public httpClient:HttpClient) { }

  /*loadTechnicalDetails()
  {
    this.httpClient.get("http://localhost:9070/technical/display").subscribe(data=>console.log(data),error=>console.log(error),()=>console.log("Completed"));
  }*/

  loadTechnicalDetails():Observable<Technical[]>{
    return this.httpClient.get<Technical[]>("http://localhost:9070/technical/display")
  }

  addTechnicalInfo(technicalRef:any):Observable<string>
  {
    //this.httpClient.post("http://localhost:9070/technical/addTechnical",technicalRef).subscribe(result=>console.log(result));
    return this.httpClient.post("http://localhost:9070/technical/addTechnical",technicalRef,{responseType:'text'});
  }

  updateStatusInfo(oId:any):Observable<any>
  {
    return this.httpClient.post("http://localhost:9070/technical/placeOrderByTechnical/"+oId,{responseType:'any'});
  }
}
