import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-vendor',
  templateUrl: './display-vendor.component.html',
  styleUrls: ['./display-vendor.component.css']
})
export class DisplayVendorComponent implements OnInit {
  flag:boolean=false
  vendorinfo:Array<Vendor>=[]
  constructor(public vendorservice:VendorServiceService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true
      this.vendorservice.getVendor().subscribe(data=>this.vendorinfo=data)
  }

  updateInternetKit(id:any){
    this.router.navigate(["vendorDashboard/updatevendorinternetkit"])
    console.log(id)
  }

  updateLandlineKit(id:any){
    this.router.navigate(["vendorDashboard/updatevendorlandlinekit"])
    console.log(id)
  }
}
