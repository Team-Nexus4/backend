import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  employee = new Employee
  constructor(public router:Router) {
    let employee1  = sessionStorage.getItem("admin");
    if(employee1!=null)
    {
      this.employee = JSON.parse(employee1);
    }
  }

  ngOnInit(): void {
  }

  logoutadmin(){
    sessionStorage.removeItem("admin")
    this.router.navigate(["home"])
  }

}
