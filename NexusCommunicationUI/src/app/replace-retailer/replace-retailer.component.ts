import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee.model';
//import { EmployeeService } from '../employee.service';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-replace-retailer',
  templateUrl: './replace-retailer.component.html',
  styleUrls: ['./replace-retailer.component.css']
})
export class ReplaceRetailerComponent implements OnInit {

  retailerRef = new FormGroup({
    eid:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    });
  msg:string="";
  rid:any
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
    this.rid=sessionStorage.getItem("rid")
  }

  replaceRetailer(employee:Employee)
  {
    console.log(this.retailerRef);
    this.retailerService.replaceRetailerInfo(employee).subscribe(data=>this.msg=data);
  }
}
