import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.module';

@Component({
  selector: 'app-update-internetstock-vendor',
  templateUrl: './update-internetstock-vendor.component.html',
  styleUrls: ['./update-internetstock-vendor.component.css']
})
export class UpdateInternetstockVendorComponent implements OnInit {
msg:string=""

  constructor(public vendorservice:VendorServiceService) { }

  ngOnInit(): void {
  }

  updateInternetStock(InternetKit:any,vid:any){
    let v =new Vendor();
    v.vid=vid;
    v.internetKit=InternetKit
    this.vendorservice.updateInternetStock(v).subscribe(result=>this.msg=result)
  }

}
