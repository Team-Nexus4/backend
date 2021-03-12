import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';



import { Vendor } from '../vendor.model';


@Component({
  selector: 'app-update-internetstock-vendor',
  templateUrl: './update-internetstock-vendor.component.html',
  styleUrls: ['./update-internetstock-vendor.component.css']
})
export class UpdateInternetstockVendorComponent{
msg:string=""
id:any;
internetKit:any
vid:any;
flag1:boolean=false;
  constructor(public vendorservice:VendorServiceService,private route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
   this.vid=sessionStorage.getItem("vid")
   this.internetKit=sessionStorage.getItem("internetkit")
   
  }
  
  updateInternetStock(internetRef:any){
    this.vendorservice.updateInternetStock(internetRef).subscribe(result=>this.msg=result)
    console.log(internetRef)
 
  }
  
  goback() { window.history.back(); }

}
