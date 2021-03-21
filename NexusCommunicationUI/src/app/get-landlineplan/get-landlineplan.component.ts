import { Component, OnInit } from '@angular/core';
import { LandLine } from '../landline.module';
import { LandlineplanService } from '../landlineplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-landlineplan',
  templateUrl: './get-landlineplan.component.html',
  styleUrls: ['./get-landlineplan.component.css']
})
export class GetLandlineplanComponent implements OnInit {
  landlineInfo:Array<LandLine>=[]
  flag:boolean = false;
  flag1=true
  msg:string=""
  constructor(public landlineService:LandlineplanService,public router:Router) { }

  ngOnInit(): void 
  {
    this.flag=true;
    if(this.flag1)
    {
      this.landlineService.getLandLinePlan().subscribe(r=>this.landlineInfo=r)
       this.flag1=false;
    }
    else{
     this.landlineInfo
    }
  }  

  updateLandlineKit(lid:any,cost:any,duration:any){
    sessionStorage.setItem("lid",lid);
    sessionStorage.setItem("cost",cost);
    sessionStorage.setItem("duration",duration);
    this.router.navigate(['/adminDashboard/updatelandlineplan'])
   
  }
  deleteLandlineKit(id:any){

    for(let i=0;i<this.landlineInfo.length;++i)
    {
      if(this.landlineInfo[i].lid==id)
      {
        this.landlineInfo.splice(i,1);
       
      }
    }

    this.landlineService.deleteLandLinePlan(id).subscribe(r=>this.msg=r)
    this.ngOnInit();
  }

  addLandlineKit(){
    this.router.navigate(['/adminDashboard/addlandlineplan'])
  }

}
