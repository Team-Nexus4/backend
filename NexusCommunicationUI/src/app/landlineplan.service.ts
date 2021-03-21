import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandLine } from './landline.module'; 

@Injectable({
  providedIn: 'root'
})
export class LandlineplanService {

  constructor(public httpClient:HttpClient) { }

  getLandLinePlan():Observable<LandLine[]>
  {
    return this.httpClient.get<LandLine[]>("http://localhost:9070/connection/landlinePlan");
  }

  addLandLinePlan(landLineRef:any):Observable<string>
  {
    return this.httpClient.post("http://localhost:9070/connection/addLandlinePlan",landLineRef,{responseType:'text'})
  }

  deleteLandLinePlan(lid:any):Observable<string>
  {
    return this.httpClient.delete("http://localhost:9070/connection/deleteLandlinePlan/"+lid,{responseType:'text'});
  }

  updateLandLinePlna(landlineplan:any):Observable<string>
  {
    return this.httpClient.put("http://localhost:9070/connection/updateLandlinePlan",landlineplan,{responseType:'text'})
  }

}
