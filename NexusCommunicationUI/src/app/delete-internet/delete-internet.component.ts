import { Component, OnInit } from '@angular/core';
import { InternetServiceService } from '../internet-service.service';

@Component({
  selector: 'app-delete-internet',
  templateUrl: './delete-internet.component.html',
  styleUrls: ['./delete-internet.component.css']
})
export class DeleteInternetComponent implements OnInit {

  msg:string="";
  constructor(public netserv:InternetServiceService) { }

  ngOnInit(): void {
  }

  deleteNet(iid:any){
    this.netserv.deleteNet(iid).subscribe(r=>this.msg=r)
  }

}
