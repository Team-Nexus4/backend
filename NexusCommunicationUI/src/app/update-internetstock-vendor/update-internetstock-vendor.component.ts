import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-internetstock-vendor',
  templateUrl: './update-internetstock-vendor.component.html',
  styleUrls: ['./update-internetstock-vendor.component.css']
})
export class UpdateInternetstockVendorComponent implements OnInit {
msg:string=""
id:any;
value:any
  constructor(public vendorservice:VendorServiceService,public route:Router) { }
  
  ngOnInit(): void {
    this.id=sessionStorage.getItem("id");
    this.value=sessionStorage.getItem("value");
  }

  updateInternetStock(vid:any,InternetKit:any){
    let v =new Vendor();
    v.vid=vid;
    v.internetKit=InternetKit
    this.vendorservice.updateInternetStock(v).subscribe(result=>this.msg=result)
  }

}
