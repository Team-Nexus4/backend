import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-technicaldashboard',
  templateUrl: './technicaldashboard.component.html',
  styleUrls: ['./technicaldashboard.component.css']
})
export class TechnicaldashboardComponent implements OnInit {
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
    sessionStorage.removeItem("customer");
    this.router.navigate(["home"]);
  }

}
