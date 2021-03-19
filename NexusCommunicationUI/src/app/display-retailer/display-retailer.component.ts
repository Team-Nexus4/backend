import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer.model';
import { RetailerService } from '../retailer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-retailer',
  templateUrl: './display-retailer.component.html',
  styleUrls: ['./display-retailer.component.css']
})
export class DisplayRetailerComponent implements OnInit {

  flag:boolean=false
  retailerinfo:Array<Retailer>=[]
  constructor(public retailerservice:RetailerService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true
      this.retailerservice.getRetailer().subscribe(data=>this.retailerinfo=data)
  }

  addRetailer(){
    this.router.navigate(['/adminDashboard/addretailer'])
  }

  replaceretailer(id:any){
    this.router.navigate(['/adminDashboard/replaceretailer'])
    sessionStorage.setItem("rid",id);
  }
}
