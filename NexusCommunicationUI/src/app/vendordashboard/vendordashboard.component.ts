import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { Vendor } from '../vendor.model';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.css']
})
export class VendordashboardComponent implements OnInit {

  employee = new Employee;
  flag:boolean=false;
  vendor:Array<Vendor>=[];
  constructor(public router:Router,public vendorService:VendorService) {
    let employee1  = sessionStorage.getItem("employee");
    if(employee1!=null)
    {
      this.employee = JSON.parse(employee1);
    }
   }

  ngOnInit(): void {
    this.flag=true;
    this.vendorService.findVendorById().subscribe(data=>this.vendor=data)
  }
  logout()
  {
    sessionStorage.removeItem("employee");
    this.router.navigate(["login"]);
  }
}
