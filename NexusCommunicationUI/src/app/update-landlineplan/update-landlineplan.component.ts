import { Component, OnInit } from '@angular/core';
import { LandlineplanService } from '../landlineplan.service';
import { LandLine } from '../landline.module';

@Component({
  selector: 'app-update-landlineplan',
  templateUrl: './update-landlineplan.component.html',
  styleUrls: ['./update-landlineplan.component.css']
})
export class UpdateLandlineplanComponent implements OnInit {
  msg:string=""
  lid:any
  cost:any
  duration:any
  speed:any
  constructor(public landlineSer:LandlineplanService) { }

  ngOnInit(): void {
    this.lid=sessionStorage.getItem("lid");
   this.cost=sessionStorage.getItem("cost");
   this.duration=sessionStorage.getItem("duration");
  }

  updateProductInfo(landlineInfo:LandLine)
  {
 
    this.landlineSer.updateLandLinePlna(landlineInfo).subscribe(data=>this.msg=data);  
  }

  goback() { window.history.back(); }
}
