
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Vendor } from '../vendor.module';

import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.model';

import { VendorServiceService } from '../vendor-service.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public vendorservice:VendorServiceService,private route:ActivatedRoute) { }

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
  }

}
