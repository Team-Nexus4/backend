import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Internet } from '../internet.module';

@Component({
  selector: 'app-orderinternetplan',
  templateUrl: './orderinternetplan.component.html',
  styleUrls: ['./orderinternetplan.component.css']
})
export class OrderinternetplanComponent implements OnInit {
  msg:string=""
  internetArray:Array<Internet>=[];
  flag:boolean=false;
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.getInternetPlan().subscribe(data=>this.internetArray=data);
  }
  
  orderInternet(iid:any)
  {
    //customer = sessionStorage.getSession("customer")
    this.customerService.placeLandlineOrder(iid).subscribe(res => this.msg = res );

    console.log(this.msg);
  }

}
