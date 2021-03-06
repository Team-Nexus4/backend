import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-place-order',
  templateUrl: './retailer-place-order.component.html',
  styleUrls: ['./retailer-place-order.component.css']
})
export class RetailerPlaceOrderComponent implements OnInit {

  ret_orderInfo=new FormGroup({
    cid:new FormControl(),
    oid:new FormControl(),
    requested_plan:new FormControl(),
    rid:new FormControl(),
    status:new FormControl() 
  })

  msg:string=""
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
  }

  retailerPlaceOrderDetails()
  {
    let ret_orderRef = this.ret_orderInfo.value;
    this.retailerService.retailerPlaceOrder(ret_orderRef).subscribe(result=>this.msg=result);
  }
}
