import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';
import { PlanBill } from '../planbill.model';

@Component({
  selector: 'app-planbillcomponent',
  templateUrl: './planbillcomponent.component.html',
  styleUrls: ['./planbillcomponent.component.css']
})
export class PlanbillcomponentComponent implements OnInit {
  planbill:Array<PlanBill>=[]
  flag:boolean= false;
  customer = new Customer;
  msg:string=""
  flag1:boolean=true
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("customer");
    if(obj!=null)
    {
      this.customer = JSON.parse(obj);
    }
    if(this.flag1)
    {
      this.flag=true;
      this.customerService.getPlanBill(this.customer.cid).subscribe(data=>this.planbill=data)
      this.flag1=false
    }
    else{
      this.planbill
    }
   
  }

  payBill(cnid:any)
  {
    for(let i=0;i<this.planbill.length;++i)
    {
      if(this.planbill[i].cnid==cnid)
      {
        this.planbill.splice(i,1);
      }
    }
     
    this.customerService.payBill(cnid).subscribe(res => {this.msg = res 
      this.ngOnInit()});
  }
  }


