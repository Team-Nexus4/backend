import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeloginserviceService} from '../employeeloginservice.service'

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  msg:string=""
  employee = new Employee();
  employee1 = new Employee();
  constructor(public router:Router,
              public employeeService:EmployeeloginserviceService
              ) { }

  ngOnInit(): void {
  }

  checkEmp(userRef:any)
  {
      let user = userRef.user;
      let pass = userRef.pass;
      
      this.employee.username=user;
      this.employee.password=pass;

        this.employeeService.checkLogin(this.employee).subscribe(obj=>{
          if(obj==null)
          {
            this.msg="Please Enter valid username or password"
          }
          else{
            if(obj.desg=="technical")
            {
              this.employee1=obj;
              sessionStorage.setItem("employee",JSON.stringify(obj));
              this.router.navigate(["technicalDashboard"]);
            }
            else if(obj.desg=="retailer")
            {
              this.employee1=obj;
              sessionStorage.setItem("employee",JSON.stringify(obj));
              this.router.navigate(["retailerDashboard"]);
            }
            else if(obj.desg=="vendor")
            {
              this.employee1=obj;
              sessionStorage.setItem("employee",JSON.stringify(obj));
              this.router.navigate(["vendorDashboard"]);
            }
            else if(obj.desg=="admin")
            {
              this.employee1=obj;
              sessionStorage.setItem("admin",JSON.stringify(obj));
              this.router.navigate(["adminDashboard"]);
            }
          }
        })
      
      
  }

}
