import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerInternetPlanStatus } from '../customerinternetplanstatus.model';
import { CustomerLandLinePlanStatus } from '../customerlandlineplanstatus';
import { Internet } from '../internet.module';
import { LandLine } from '../landline.module';
import { Order } from '../order.model';
import { LandlineplanService } from '../landlineplan.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-displaycustomerplan',
  templateUrl: './displaycustomerplan.component.html',
  styleUrls: ['./displaycustomerplan.component.css']
})
export class DisplaycustomerplanComponent implements OnInit {
  msg:string=""
  internetArray:Array<Internet>=[];
  landlineArray:Array<LandLine>=[];

  internetArray1:Array<Internet>=[];
  landlineArray1:Array<LandLine>=[];

  order:Array<Order>=[];
  flagi:boolean=false;
  flagl:boolean=false;
  customer = new Customer;
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("customer");
    if(obj!=null)
    {
    this.customer = JSON.parse(obj);
    }
    this.customerService.getAllCustomerPlan(this.customer.cid).subscribe(data=>this.order=data)
    this.customerService.getInternetPlan().subscribe(data=>{this.internetArray=data
      for(let i=0;i<this.order.length;++i)
      {
        for(let j=0;j<this.internetArray.length;++j)
        if(this.internetArray[j].iid==this.order[i].requested_plan)
        {
          if(this.order[i].status=="false")
          {
            this.internetArray[j].status="Pending"
          }
          else if(this.order[i].status=="pass")
          {
            this.internetArray[j].status="Goes To Technical Department"
          }
          else{
            this.internetArray[j].status="Placed"
          }
          this.internetArray1.push(this.internetArray[j])
          this.flagi=true;
        }
      }});
    if(this.internetArray!=null)
    {
      this.flagi=true;
    }
    
    this.customerService.getAllLandLinePlan().subscribe(data=>{this.landlineArray=data
      for(let j=0;j<this.landlineArray.length;++j )
      {
        for(let i=0;i<this.order.length;++i)
        if(this.landlineArray[j].lid===this.order[i].requested_plan)
        {
          if(this.order[i].status=="false")
          {
            this.landlineArray[j].status="Pending"
          }
          else if(this.order[i].status=="pass")
          {
            this.landlineArray[j].status="Goes To Technical Department"
          }
          else{
            this.landlineArray[j].status="Placed"
          }
          this.landlineArray1.push(this.landlineArray[j])
          this.flagl=true;
        }
       
      }
     
    });
    if(this.landlineArray!=null)
    {
      this.flagl=true;
    }
    console.log("ckeck")

  }
}  


