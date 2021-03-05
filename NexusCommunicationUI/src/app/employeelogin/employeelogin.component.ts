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


      console.log(user+" "+pass);
      
      this.employee.username=user;
      this.employee.password=pass;

        this.employeeService.checkLogin(this.employee).subscribe(obj=>{
          if(obj==null)
          {
            console.log("wrong");
            console.log("emp")
          }
          else{
            if(obj.desg=="technical")
            {
              console.log(obj);
              this.employee1=obj;
              sessionStorage.setItem("employee1",JSON.stringify(obj));
              this.router.navigate(["technicalDashboard"]);
            }
            else if(obj.desg=="retailer")
            {
              console.log(obj);
              this.employee1=obj;
              sessionStorage.setItem("employee1",JSON.stringify(obj));
              this.router.navigate(["retailerDashboard"]);
            }
            else if(obj.desg=="vendor")
            {
              console.log(obj);
              this.employee1=obj;
              sessionStorage.setItem("employee1",JSON.stringify(obj));
              this.router.navigate(["vendorDashboard"]);
            }
            else if(obj.desg=="admin")
            {
              console.log(obj);
              this.employee1=obj;
              sessionStorage.setItem("employee1",JSON.stringify(obj));
              this.router.navigate(["adminDashboard"]);
            }
            // console.log(obj);
            // this.employee1=obj;
            // sessionStorage.setItem("employee",JSON.stringify(obj));
            // this.router.navigate(["customerDashboard"]);
          }
        })
      
      
  }

}
