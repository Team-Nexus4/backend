import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LandLine } from '../landline.module';

@Component({
  selector: 'app-orderlandlineplan',
  templateUrl: './orderlandlineplan.component.html',
  styleUrls: ['./orderlandlineplan.component.css']
})
export class OrderlandlineplanComponent implements OnInit {
  msg:string=""
  landlineArray:Array<LandLine>=[];
  flag:boolean=false;
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.getAllLandLinePlan().subscribe(data=>this.landlineArray=data);
  }

  orderLandline(lid:any)
  {
    //customer = sessionStorage.getSession("customer")
    this.customerService.placeLandlineOrder(lid).subscribe(res => this.msg = res );

    console.log(this.msg);
  }

}
