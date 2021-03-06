import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Internet } from './internet.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternetServiceService {

  constructor(public httpClient:HttpClient) { }

  loadNetRecord():Observable<Internet[]>{
   return this.httpClient.get<Internet[]>("http://localhost:9070/nexusInternet/display");
  }

  storeDetails(empRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9070/nexusInternet/store",empRef,{responseType:'text'});
  }

  updateNet(netRef:any){
    return this.httpClient.put("http://localhost:9070/nexusInternet/update",netRef,{responseType:'text'})
  }

  deleteNet(iid:number){
    return this.httpClient.delete("http://localhost:9070/nexusInternet/delete/"+iid,{responseType:'text'})
  }
}
