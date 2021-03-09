import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { OrderStock } from '../orderstock.model';
import { Retailer } from '../retailer.model';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-place-order-stock',
  templateUrl: './retailer-place-order-stock.component.html',
  styleUrls: ['./retailer-place-order-stock.component.css']
})
export class RetailerPlaceOrderStockComponent implements OnInit {

  retailer:Array<Retailer>=[];
  
  //retailer=new Retailer;
  msg:string="";
  flag:boolean=false;
  orderstock=new OrderStock;
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.retailerService.findRetailer().subscribe(data=>this.retailer=data);
    console.log(this.retailer);
  }

  placeOrderStocki(lstocki:any)
  {
    this.orderstock.rid=this.retailer[0].rid;
    this.orderstock.requestedItem="ik";
    this.orderstock.requestedStock=lstocki;
    this.orderstock.vid=this.retailer[0].vid;
    console.log(this.orderstock.requestedItem);
    console.log(lstocki);
    this.retailerService.retailerPlaceOrderStock(this.orderstock).subscribe(data=>this.msg=data);
    console.log(this.msg);
  }

  placeOrderStockl(lstockl:any)
  {
    this.orderstock.rid=this.retailer[0].rid;
    this.orderstock.requestedItem="lk";
    this.orderstock.requestedStock=lstockl;
    this.orderstock.vid=this.retailer[0].vid;
    console.log(this.orderstock.requestedItem);
    console.log(lstockl);
    this.retailerService.retailerPlaceOrderStock(this.orderstock).subscribe(data=>this.msg=data);
  }
  

}
