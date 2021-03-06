import { Component, OnInit } from '@angular/core';
import { InternetServiceService } from '../internet-service.service';
import { Internet } from '../internet.module';

@Component({
  selector: 'app-get-internet',
  templateUrl: './get-internet.component.html',
  styleUrls: ['./get-internet.component.css']
})
export class GetInternetComponent implements OnInit {

  flag=false;
  constructor(public netserv:InternetServiceService) { }
  netInfo:Array<Internet>=[];
  ngOnInit(): void {
    this.flag=true;
    this.netserv.loadNetRecord().subscribe(res=>this.netInfo=res)
  }



}
