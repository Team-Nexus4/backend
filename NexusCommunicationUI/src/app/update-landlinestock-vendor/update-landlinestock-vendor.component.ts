
import { Component, OnDestroy, OnInit } from '@angular/core';



import { Vendor } from '../vendor.model';

import { VendorServiceService } from '../vendor-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-landlinestock-vendor',
  templateUrl: './update-landlinestock-vendor.component.html',
  styleUrls: ['./update-landlinestock-vendor.component.css']
})
export class UpdateLandlinestockVendorComponent {

  msg:string=""
id:any;
vid:any;
landlineKit:any
flag1:boolean=false;
  constructor(public vendorservice:VendorServiceService,private route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.vid=sessionStorage.getItem("vid")
    this.landlineKit=sessionStorage.getItem("landlineKit")
  }
 
  
  updateLandlineStock(landlinetRef:any){
    this.vendorservice.updateLandlineStock(landlinetRef).subscribe(result=>this.msg=result)
    console.log(landlinetRef)
 
  }
  

}
