import { Component, OnInit } from '@angular/core';
import { TechnicalService } from '../technical.service';
import {Technical} from '../technical.model';
import { Order } from '../order.model';

@Component({
  selector: 'app-display-technical',
  templateUrl: './display-technical.component.html',
  styleUrls: ['./display-technical.component.css']
})
export class DisplayTechnicalComponent implements OnInit {
  msg:any
  technicalInfo:Array<Technical>=[];
  flag:boolean=false;
  flag1:boolean=true;
  order=new Order

  constructor(public technicalService:TechnicalService) { }

  ngOnInit(): void {
    this.flag=true;
    if(this.flag1)
    {
      this.technicalService.loadTechnicalDetails().subscribe(data=>this.technicalInfo=data);
      this.flag1=false;
    }
    else{
      this.technicalInfo;
    }
  }

  palceTechnical(oid:any)
  {
    for(let i=0;i<this.technicalInfo.length;++i)
    {
      if(this.technicalInfo[i].oid==oid)
      {
        this.technicalInfo.splice(i,1);
      }
    }
    this.order.oid=oid;
    this.technicalService.updateStatusInfo(this.order).subscribe(res => {this.msg = res 
    this.ngOnInit()});

  }

}
