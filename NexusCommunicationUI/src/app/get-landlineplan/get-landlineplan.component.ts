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
    console.log(lid,cost,duration)
    this.router.navigate(["updatelandlineplan"])
   
  }
  deleteLandlineKit(id:any){

    for(let i=0;i<this.landlineInfo.length;++i)
    {
      console.log(this.landlineInfo[i].lid)
      if(this.landlineInfo[i].lid==id)
      {
        this.landlineInfo.splice(i,1);
       
      }
    }

    this.landlineService.deleteLandLinePlan(id).subscribe(r=>r)
    this.ngOnInit();
  }

  addLandlineKit(){
    this.router.navigate(["addlandlineplan"])
  }

}
