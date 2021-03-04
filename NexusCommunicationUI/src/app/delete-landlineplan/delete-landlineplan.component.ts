import { Component, OnInit } from '@angular/core';
import { LandlineplanService } from '../landlineplan.service';

@Component({
  selector: 'app-delete-landlineplan',
  templateUrl: './delete-landlineplan.component.html',
  styleUrls: ['./delete-landlineplan.component.css']
})
export class DeleteLandlineplanComponent implements OnInit {
  msg:string=""
  constructor(public landlineSer:LandlineplanService) { }

  ngOnInit(): void {
  }
  deleteLandLine(lid:any)
  {
      this.landlineSer.deleteLandLinePlan(lid).subscribe(res => this.msg = res);
  }

}
