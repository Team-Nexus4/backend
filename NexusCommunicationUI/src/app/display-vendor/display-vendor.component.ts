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


  addVendor(){
    this.router.navigate(['/adminDashboard/addvendor'])
  }
 
  updateInternetKit(id:any,internetkit:any){
    sessionStorage.setItem("vid",id);
    sessionStorage.setItem("internetkit",internetkit)
    this.router.navigate(['/adminDashboard/updatevendorinternetkit'])
  }

  updateLandlineKit(id:any,landlinekit:any){
    sessionStorage.setItem("vid",id);
    sessionStorage.setItem("landlineKit",landlinekit)
    this.router.navigate(['/adminDashboard/updatevendorlandlinekit'])
  }
}
