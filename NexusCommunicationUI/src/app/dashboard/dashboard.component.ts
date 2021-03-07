import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';
import { Internet } from '../internet.module';
import { LandLine } from '../landline.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
 
})
export class DashboardComponent implements OnInit {
  customer = new Customer;
  
  constructor(public router:Router,public customerService:CustomerService) {
    
   }

  ngOnInit(): void {
    let customer1  = sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer = JSON.parse(customer1);
    }
    

  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }

}
