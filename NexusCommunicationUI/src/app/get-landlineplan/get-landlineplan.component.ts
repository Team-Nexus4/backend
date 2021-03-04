import { Component, OnInit } from '@angular/core';
import { LandLine } from '../landline.module';
import { LandlineplanService } from '../landlineplan.service';

@Component({
  selector: 'app-get-landlineplan',
  templateUrl: './get-landlineplan.component.html',
  styleUrls: ['./get-landlineplan.component.css']
})
export class GetLandlineplanComponent implements OnInit {
  landlineInfo:Array<LandLine>=[]
  flag:boolean = false;
  
  constructor(public landlineService:LandlineplanService) { }

  ngOnInit(): void 
  {
    this.flag=true;
    this.landlineService.getLandLinePlan().subscribe(data=>this.landlineInfo=data);
  }


}
