import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.model';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-display-all-vendor',
  templateUrl: './display-all-vendor.component.html',
  styleUrls: ['./display-all-vendor.component.css']
})
export class DisplayAllVendorComponent implements OnInit {
  vendorInfo:Array<Vendor>=[];
  flag:boolean=false;
  constructor(public vendorService:VendorService) { }

  ngOnInit(): void {
  }

  loadvendordata()
  {
    this.flag=true;
    this.vendorService.loadvendordetails().subscribe(data=>this.vendorInfo=data);
  }
}
