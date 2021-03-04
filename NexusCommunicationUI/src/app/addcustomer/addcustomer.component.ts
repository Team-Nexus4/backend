import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  msg:string=""
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }

  //addCustomer()
  addCustomerComponent(customer:Customer)
  {
    console.log(customer);
    this.customerService.addCustomer(customer).subscribe(data=>this.msg = data)
  }

}
