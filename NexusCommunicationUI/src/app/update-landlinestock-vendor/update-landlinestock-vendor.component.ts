import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.model';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-update-landlinestock-vendor',
  templateUrl: './update-landlinestock-vendor.component.html',
  styleUrls: ['./update-landlinestock-vendor.component.css']
})
export class UpdateLandlinestockVendorComponent implements OnInit {

  msg:string=""

  constructor(public vendorservice:VendorServiceService) { }

  ngOnInit(): void {
  }

  updateLandlineStock(InternetKit:any,vid:any){
    let v =new Vendor();
    v.vid=vid;
    v.landlinekit=InternetKit
    this.vendorservice.updateLandlineStock(v).subscribe(result=>this.msg=result)
  }

}
