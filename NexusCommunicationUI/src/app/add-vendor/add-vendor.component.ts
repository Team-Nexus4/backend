import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
msg:string=""
  constructor(public vendorservice:VendorServiceService) { }

  ngOnInit(): void {
  }

  addVendorComponent(vendorRef:any){
    this.vendorservice.addVendor(vendorRef).subscribe(result=>this.msg=result)
  }
}
