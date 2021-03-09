import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.model';

@Component({
  selector: 'app-update-internetstock-vendor',
  templateUrl: './update-internetstock-vendor.component.html',
  styleUrls: ['./update-internetstock-vendor.component.css']
})
export class UpdateInternetstockVendorComponent implements OnInit, OnDestroy {
msg:string=""
id:any;
vid:any;
flag1:boolean=false;
  constructor(public vendorservice:VendorServiceService,private route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params=>{​​

      this.vid=params.get('id.value')})
      this.flag1=true;
  }
  ngOnDestroy() {
    this.flag1=false;
  }
  

  updateInternetStock(InternetKit:any){
    
      
    let v =new Vendor();

    v.vid=this.vid;
    v.internetKit=InternetKit
    console.log(v)

    this.vendorservice.updateInternetStock(v).subscribe(result=>this.msg=result)
    //this.flag1=false;
    //this.router.navigate([".seeallvendor"])
  }
   back()
   {
     this.flag1=false;
   }

}
