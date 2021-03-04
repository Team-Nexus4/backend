import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LandlineplanService } from '../landlineplan.service';

@Component({
  selector: 'app-add-landlineplan',
  templateUrl: './add-landlineplan.component.html',
  styleUrls: ['./add-landlineplan.component.css']
})
export class AddLandlineplanComponent implements OnInit {
  landlineInfo = new FormGroup({
   
    duration:new FormControl(),
    cost:new FormControl()
  })
  msg:string=""
  
  constructor(public landlineSer:LandlineplanService) { }

  ngOnInit(): void {
  }
  addLandLinePlan()
  {
    let landlineObj = this.landlineInfo.value;
    this.landlineSer.addLandLinePlan(landlineObj).subscribe(res => this.msg=res);
  }

}
