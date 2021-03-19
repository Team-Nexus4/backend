import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Technical } from '../technical.model';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'app-add-technical',
  templateUrl: './add-technical.component.html',
  styleUrls: ['./add-technical.component.css']
})
export class AddTechnicalComponent implements OnInit {
  technicalInfo=new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    desg:new FormControl()
  })

  msg:string=""
  constructor(public technicalService:TechnicalService) { }    //DI for service class

  ngOnInit(): void {
  }

  addTechnicalDetails(tech:Technical)
  {
    //console.log(this.technicalInfo.value)
 
    this.technicalService.addTechnicalInfo(tech).subscribe(result=>this.msg=result);
  }
}
