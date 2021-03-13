import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  msg:string=""
  constructor(public retailerservice:RetailerService) { }

  ngOnInit(): void {
  }

  addretailer(retailerRef:any){
    this.retailerservice.addRetailer(retailerRef).subscribe(result=>this.msg=result)
  }

  goback() { window.history.back(); }
}
