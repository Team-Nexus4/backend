
import { Component, OnDestroy, OnInit } from '@angular/core';



import { Vendor } from '../vendor.model';

import { VendorServiceService } from '../vendor-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-landlinestock-vendor',
  templateUrl: './update-landlinestock-vendor.component.html',
  styleUrls: ['./update-landlinestock-vendor.component.css']
})
export class UpdateLandlinestockVendorComponent implements OnInit, OnDestroy {

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

  updateLandlineStock(InternetKit:any){
    let v =new Vendor();

    v.vid=this.vid;
    v.landlineKit=InternetKit

    this.vendorservice.updateLandlineStock(v).subscribe(result=>this.msg=result)
    //this.flag1=false;
    //this.router.navigate(["seeallvendor"])
  }
  back()
  {
    this.flag1=false;
  }

}
