import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';
import { LandLine } from '../landline.module';
import { Order } from '../order.model';

@Component({
  selector: 'app-orderlandlineplan',
  templateUrl: './orderlandlineplan.component.html',
  styleUrls: ['./orderlandlineplan.component.css']
})
export class OrderlandlineplanComponent implements OnInit {
  msg: string = ""
  landlineArray: Array<LandLine> = [];
  flag: boolean = false;
  flagc: boolean = false;
  order: Array<Order> = []
  customer = new Customer
  element:any
  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.flag = true;
    this.flagc = false;
    let cust = sessionStorage.getItem("customer")
    if (cust != null) {
      this.customer = JSON.parse(cust);
    }
    this.customerService.getAllCustomerPlan(this.customer.cid).subscribe(or => this.order = or);
    this.customerService.getAllLandLinePlan().subscribe(data => {
      this.landlineArray = data;

      var j = 0;
      for (let i of this.landlineArray) {
        for (let io of this.order) {
          if (i.lid == io.requested_plan) {
            this.flagc = true

          }
          console.log(io)

        }
        if (this.flagc) {
          //this.flag=false;
          this.landlineArray[j].colori = "Red";

        }
        else {
          this.landlineArray[j].colori = "Green";
        }
        j++;
        this.flagc = false;
        console.log("check 3")
      }

      for (let i of this.landlineArray) {
        console.log(i.colori)
      }
    });
  }

  orderLandline(lid: any,event:any) {
    //customer = sessionStorage.getSession("customer")
    // this.element = document.getElementById("myDiv");
    // this.element.classList.add("bg-danger");
    
    this.customerService.placeLandlineOrder(lid).subscribe(res =>
      { this.msg = res
        if(this.msg!=null)
        {
          event.target.classList.add('bg-danger');
        }
      }
      );

    console.log(this.msg);
  }

}
