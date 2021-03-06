import { Component, OnInit } from '@angular/core';
import { InternetServiceService } from '../internet-service.service';

@Component({
  selector: 'app-update-internet',
  templateUrl: './update-internet.component.html',
  styleUrls: ['./update-internet.component.css']
})
export class UpdateInternetComponent implements OnInit {

  msg:string=""
  constructor(public netserv:InternetServiceService) { }

  ngOnInit(): void {
  }

  updateNet(NetRef:any){
    this.netserv.updateNet(NetRef).subscribe(r=>this.msg=r)
  }

}
