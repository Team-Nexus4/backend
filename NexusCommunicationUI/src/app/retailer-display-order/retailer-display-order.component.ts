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
  retailerRef:Array<Order>=[];
  flag:boolean=true;
  constructor(public retailerService:RetailerService) { }

  ngOnInit(): void {
  }
  
  callService(rid1:any) {
    console.log("Event fired "+rid1)
    this.rid=rid1;
    this.retailerService.findRetailerById(this.rid).subscribe(data=> {
       if(data==null){
         console.log("Record not found")
         this.msg = "Record not found";
       this.flag= true;
       }else {
         this.msg = "";
         this.flag = true;
         this.retailerRef=data;        
    }
    })
  }
}
