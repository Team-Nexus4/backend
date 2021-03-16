import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';
import { Internet } from '../internet.module';
import { Order } from '../order.model';

@Component({
  selector: 'app-orderinternetplan',
  templateUrl: './orderinternetplan.component.html',
  styleUrls: ['./orderinternetplan.component.css']
})
export class OrderinternetplanComponent implements OnInit {
  msg:string=""
  internetArray:Array<Internet>=[];
  order:Array<Order>=[]
  flag:boolean=false;
  flagc:boolean=false
  element:any
  
  customer = new Customer
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.flagc=false;
    let cust = sessionStorage.getItem("customer")
      if(cust!=null)
      {
          this.customer = JSON.parse(cust);
      }
    this.customerService.getAllCustomerPlan(this.customer.cid).subscribe(or=>this.order=or);
    this.customerService.getInternetPlan().subscribe(data=>
    {
      this.internetArray=data

      var j=0;
      for(let i of this.internetArray)
      {
        for(let io of this.order)
        {
          if(i.iid==io.requested_plan)
          {
            this.flagc=true
            
          }
          console.log(io)
          
        }
        if(this.flagc)
        {
          //this.flag=false;
          this.internetArray[j].colori="Red";
          
        }
        else
        {
          this.internetArray[j].colori="Green";
        }
        j++;
        this.flagc=false;
        console.log("check 3")
      }

      for(let i of this.internetArray)
      {
        console.log(i.colori)
      }
    
    });
  }
  
  orderInternet(iid:any,event:any)
  {
  //  this.element = document.getElementById("myDiv");
  //   this.element.classList.add("bg-danger");
    this.customerService.placeLandlineOrder(iid).subscribe(res =>
      { this.msg = res 
        if(this.msg!=null)
        {
          event.target.classList.add('bg-danger');
        }
      });

    console.log(this.msg);

  }

}
