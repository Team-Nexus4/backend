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
  iid:any
  cost:any
  duration:any
  speed:any


  constructor(public netserv:InternetServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
 
      this.iid=params.get('id.value')
      this.cost=params.get('cost.value')
      this.duration=params.get('duration.value')
      this.speed=params.get('speed.value')
    
    })
    
  }

  updateNet(NetRef:any){
    this.netserv.updateNet(NetRef).subscribe(r=>this.msg=r)
  }

}
