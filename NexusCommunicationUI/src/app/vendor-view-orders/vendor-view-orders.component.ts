import { Component, OnInit } from '@angular/core';
import { OrderStock } from '../orderstock.model';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-view-orders',
  templateUrl: './vendor-view-orders.component.html',
  styleUrls: ['./vendor-view-orders.component.css']
})
export class VendorViewOrdersComponent implements OnInit {

  ost:Array<OrderStock>=[];
  flag1:boolean=true;
  flag:boolean=false;
  msg:string="";
  orderstock=new OrderStock();
  constructor(public vendorService:VendorService) { }

  ngOnInit(): void 
  {
    this.flag=true;
    if(this.flag1)
    {
      this.vendorService.viewOrder().subscribe(data=>this.ost=data);
      this.flag1=false;
    }
    else
    {
      this.ost;
    }

  }

  fulfillOrderStock(oid:any)
  {
    for(let i=0;i<this.ost.length;++i)
    {
      if(this.ost[i].oid==oid)
      {
        this.ost.splice(i,1);
      }
    }
    this.orderstock.oid=oid 
    this.vendorService.vendorFulfillOrder(this.orderstock).subscribe(res => {this.msg = res 
      this.ngOnInit()});
  }

}
