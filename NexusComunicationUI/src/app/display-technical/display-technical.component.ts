import { Component, OnInit } from '@angular/core';
import { TechnicalService } from '../technical.service';
import {Technical} from '../technical.model';

@Component({
  selector: 'app-display-technical',
  templateUrl: './display-technical.component.html',
  styleUrls: ['./display-technical.component.css']
})
export class DisplayTechnicalComponent implements OnInit {

  technicalInfo:Array<Technical>=[];
  flag:boolean=false;

  constructor(public technicalService:TechnicalService) { }

  ngOnInit(): void {
    //this.flag=true;
    //this.technicalService.loadTechnicalDetails().subscribe(data=>this.technicalInfo=data);
  }

  loaddata()
  {
    this.flag=true;
    this.technicalService.loadTechnicalDetails().subscribe(data=>this.technicalInfo=data);

  }

}
