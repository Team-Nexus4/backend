import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-display-order',
  templateUrl: './retailer-display-order.component.html',
  styleUrls: ['./retailer-display-order.component.css']
})
export class RetailerDisplayOrderComponent implements OnInit {

  rid:number=0;
  msg:string="";
  order:Array<Order>=[];
  flag:boolean=false;
  orderObj = new Order
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.retailerService.findRetailerById().subscribe(data=>this.order=data)
    
  }

  retailerPlaceOrderDetails(oid:any)
  {
    for(let i=0;i<this.order.length;++i)
    {
      if(this.order[i].oid===oid)
      {
        this.order.splice(i,1);
      }
    }
    this.orderObj.oid=oid 
    this.retailerService.retailerPlaceOrder(this.orderObj).subscribe(res => {this.msg = res 
      this.ngOnInit()});
  }
}
