import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  msg:string=""
  constructor(public customerService:CustomerService) { }
  //updateCustomerComponent

  ngOnInit(): void {
  }

  updateCustomerComponent(customer:Customer)
  {
    customer.cid=3333000034
      this.customerService.updateCustomer(customer).subscribe(res=>this.msg=res);
  }

}
