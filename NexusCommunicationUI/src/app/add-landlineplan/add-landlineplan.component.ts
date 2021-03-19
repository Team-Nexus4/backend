import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LandLine } from '../landline.module';
import { LandlineplanService } from '../landlineplan.service';

@Component({
  selector: 'app-add-landlineplan',
  templateUrl: './add-landlineplan.component.html',
  styleUrls: ['./add-landlineplan.component.css']
})
export class AddLandlineplanComponent implements OnInit {

  msg:string=""
  
  constructor(public landlineSer:LandlineplanService) { }

  ngOnInit(): void {
  }
  addLandLinePlan(landline:LandLine)
  {

    this.landlineSer.addLandLinePlan(landline).subscribe(res => this.msg=res);
  }
  goback() { window.history.back(); }
}
