import { Component, OnInit } from '@angular/core';
import { LandlineplanService } from '../landlineplan.service';

@Component({
  selector: 'app-update-landlineplan',
  templateUrl: './update-landlineplan.component.html',
  styleUrls: ['./update-landlineplan.component.css']
})
export class UpdateLandlineplanComponent implements OnInit {
  msg:string=""
  constructor(public landlineSer:LandlineplanService) { }

  ngOnInit(): void {
  }

  updateProductInfo(landlineInfo:any)
  {
    console.log(landlineInfo)
    this.landlineSer.updateLandLinePlna(landlineInfo).subscribe(data=>this.msg=data);  
  }

}
