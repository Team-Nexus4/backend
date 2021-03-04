import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerInternetPlanStatus } from '../customerinternetplanstatus.model';
import { CustomerLandLinePlanStatus } from '../customerlandlineplanstatus';

@Component({
  selector: 'app-displaycustomerplan',
  templateUrl: './displaycustomerplan.component.html',
  styleUrls: ['./displaycustomerplan.component.css']
})
export class DisplaycustomerplanComponent implements OnInit {
  obj:Array<Object>=[]
  obj12:any=[]
  customerInternetPlanStatuc:Array<CustomerInternetPlanStatus>=[]
  customerLandLinePlanStatuc:Array<CustomerLandLinePlanStatus>=[]
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomerPlan(3333000001).subscribe(data=>{
      this.obj = data
      console.log(data)
      this.obj.push(data);
    //   for( var obj1 of data)
    //   {
    //     this.obj.push(obj1);
    //   }
    //   for( var obj2 of this.obj)
    //   {
    //     console.log( obj2.toString().length);
    //     if(obj2.toString().length>11)
    //     {
    //       console.log("Check 1")
    //     this.customerInternetPlanStatuc.push(obj2);
    //   }
    //     else
    //     {
    //       this.customerLandLinePlanStatuc.push(obj2);
    //       console.log("check 2")
    //     }
        
    //   }
    //   console.log(this.customerLandLinePlanStatuc[0]);
    //   console.log(this.customerInternetPlanStatuc[0]);
    // })
    // console.log(this.customerLandLinePlanStatuc[0]);
    // console.log(this.obj);
    //this.fun()
  })
  console.log(this.obj);

}

  getAllCustomerPlan()
  {
    
    // let cido = sessionStorage.getItem("customer");
    // if(cido!=null)
    // {
    //   let customer = JSON.parse(cido);
    //   this.customerService.getAllCustomerPlan(3333000001).subscribe(data=>this.obj=data);
    // }
    
    
    
  }
  fun()
  {
    // for(var obj1 of this.obj )
    // {
    //     //console.log(obj1.valueOf);
    //     this.obj12=obj1;
    //     //console.log(this.obj12.length);
    //     if(this.obj12.length==4)
    //     {
    //       //console.log("check pas")
    //         this.customerInternetPlanStatuc.push(this.obj12);
    //     }
    //     else{
    //         this.customerLandLinePlanStatuc.push(this.obj12);
    //     }
        
    // }
    console.log(this.customerInternetPlanStatuc[0]);
    console.log(this.customerLandLinePlanStatuc[0]);
  }
  

}
