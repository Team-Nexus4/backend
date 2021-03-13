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
  customer = new Customer
  ngOnInit(): void {
  }

  updateCustomerComponent(customer:Customer)
  {
      let cust = sessionStorage.getItem("customer")
      if(cust!=null)
      {
        this.customer = JSON.parse(cust);
      }
      this.customerService.updateCustomer(this.customer).subscribe(res=>this.msg=res);
  }

  goback() { window.history.back(); }
}
