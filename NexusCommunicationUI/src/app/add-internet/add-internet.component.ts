import { Component, OnInit } from '@angular/core';

import { InternetServiceService } from '../internet-service.service';
import { Internet } from '../internet.model';

@Component({
  selector: 'app-add-internet',
  templateUrl: './add-internet.component.html',
  styleUrls: ['./add-internet.component.css']
})
export class AddInternetComponent implements OnInit {

  constructor(public netser:InternetServiceService) { }

  ngOnInit(): void {
  }

  msg:string="";
  storeNetDetail(internet:Internet){
    
    
    this.netser.storeDetails(internet).subscribe(r=>this.msg=r);
  }

  goback() { window.history.back(); }

}
