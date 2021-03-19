import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InternetServiceService } from '../internet-service.service';
import { Internet } from '../internet.model';

@Component({
  selector: 'app-add-internet',
  templateUrl: './add-internet.component.html',
  styleUrls: ['./add-internet.component.css']
})
export class AddInternetComponent implements OnInit {

  // netinfo=new FormGroup({
  //   iid:new FormControl(),
  //   speed:new FormControl(),
  //   cost:new FormControl(),
  //   duration:new FormControl()
  // })
  constructor(public netser:InternetServiceService) { }

  ngOnInit(): void {
  }

  msg:string="";
  storeNetDetail(internet:Internet){
    
    console.log(internet);
    this.netser.storeDetails(internet).subscribe(r=>this.msg=r);
  }

  goback() { window.history.back(); }

}
