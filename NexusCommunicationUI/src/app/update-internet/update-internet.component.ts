import { Component, OnInit } from '@angular/core';
import { InternetServiceService } from '../internet-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-internet',
  templateUrl: './update-internet.component.html',
  styleUrls: ['./update-internet.component.css']
})
export class UpdateInternetComponent implements OnInit {

  msg:string=""
  id:any
  cost:any
  duration:any
  speed:any


  constructor(public netserv:InternetServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=sessionStorage.getItem("iid");
   this.cost=sessionStorage.getItem("cost");
   this.duration=sessionStorage.getItem("duration");
   this.speed=sessionStorage.getItem("speed");
    
  }

  updateNet(NetRef:any){
    this.netserv.updateNet(NetRef).subscribe(r=>this.msg=r)
  }

  goback() { window.history.back(); }
}
