import { Component, OnInit } from '@angular/core';
import { InternetServiceService } from '../internet-service.service';
import { Internet } from '../internet.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-internet',
  templateUrl: './get-internet.component.html',
  styleUrls: ['./get-internet.component.css']
})
export class GetInternetComponent implements OnInit {

  flag=false;
  flag1=true;
  msg:string=""
  constructor(public netserv:InternetServiceService,public router:Router) { }
  netInfo:Array<Internet>=[];
  ngOnInit(): void {
    this.flag=true;

   

    if(this.flag1)
    {
      this.netserv.loadNetRecord().subscribe(res=>this.netInfo=res)
    
      this.flag1=false;
    }
    else{
     this.netInfo
    }
  }

  updateInternetKit(iid:any,speed:any,cost:any,duration:any){
    sessionStorage.setItem("iid",iid);
    sessionStorage.setItem("cost",cost);
    sessionStorage.setItem("speed",speed);
    sessionStorage.setItem("duration",duration);
    console.log(iid,speed,cost,duration)
    this.router.navigate(["updateinternetplan"])
   
  }
  deleteInternetKit(id:any){

    for(let i=0;i<this.netInfo.length;++i)
    {
      console.log(this.netInfo[i].iid)
      if(this.netInfo[i].iid==id)
      {
        this.netInfo.splice(i,1);
       
      }
    }
    
    this.netserv.deleteNet(id).subscribe(r=>this.msg=r)
    this.ngOnInit();
  }

  addInternetKit(){
    this.router.navigate(["addinternetplan"])
  }

}
