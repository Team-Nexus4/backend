import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {
  msg:string=""
  customerArray:Array<Customer>=[];
  flag:boolean=false;
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.getAllCustomer().subscribe(data=>this.customerArray=data);
  }

  deleteCustomer(cid:any)
  {
    for(let i=0;i<this.customerArray.length;++i)
    {
      if(this.customerArray[i].cid===cid)
      {
        this.customerArray.splice(i,1);
      }
    }
    this.customerService.deleteCustomer(cid).subscribe(res => {this.msg = res 
      this.ngOnInit()});

  }

  

}
