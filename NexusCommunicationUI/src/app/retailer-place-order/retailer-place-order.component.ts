import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-place-order',
  templateUrl: './retailer-place-order.component.html',
  styleUrls: ['./retailer-place-order.component.css']
})
export class RetailerPlaceOrderComponent implements OnInit {

  rid:number=0;
  msg:string="";
  order:Array<Order>=[];
  flag:boolean=false;
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.retailerService.findRetailerById().subscribe(data=>this.order=data)
    
  }

  retailerPlaceOrderDetails(oid:any)
  {
    this.retailerService.retailerPlaceOrder(oid).subscribe(result=>this.msg=result);
  }
}
