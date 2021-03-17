import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-retailerdashboard',
  templateUrl: './retailerdashboard.component.html',
  styleUrls: ['./retailerdashboard.component.css']
})
export class RetailerdashboardComponent implements OnInit {
  employee = new Employee;
  constructor(public router:Router) {
    let employee1  = sessionStorage.getItem("employee");
    if(employee1!=null)
    {
      this.employee = JSON.parse(employee1);
    }
   }

  ngOnInit(): void {
  }

  logout()
  {
    sessionStorage.removeItem("employee");
    this.router.navigate(["home"]);
  }
}
