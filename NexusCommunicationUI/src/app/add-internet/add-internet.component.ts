import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InternetServiceService } from '../internet-service.service';

@Component({
  selector: 'app-add-internet',
  templateUrl: './add-internet.component.html',
  styleUrls: ['./add-internet.component.css']
})
export class AddInternetComponent implements OnInit {

  netinfo=new FormGroup({
    iid:new FormControl(),
    speed:new FormControl(),
    cost:new FormControl(),
    duration:new FormControl()
  })
  constructor(public netser:InternetServiceService) { }

  ngOnInit(): void {
  }

  msg:string="";
  storeNetDetail(){
    let empRef=this.netinfo.value;
   // console.log(this.empinfo.value);
    this.netser.storeDetails(empRef).subscribe(r=>this.msg=r);
  }

  goback() { window.history.back(); }

}
