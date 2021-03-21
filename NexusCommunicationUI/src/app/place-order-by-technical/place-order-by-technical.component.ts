import { Component, OnInit } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'app-place-order-by-technical',
  templateUrl: './place-order-by-technical.component.html',
  styleUrls: ['./place-order-by-technical.component.css']
})
export class PlaceOrderByTechnicalComponent implements OnInit {

  constructor(public technicalService:TechnicalService) { }
  msg:string="";
  ngOnInit(): void {
  }

  updateStatus(oid:any)
  {
    this.technicalService.updateStatusInfo(oid).subscribe(result=>this.msg="Update Successfull");
  }
}
