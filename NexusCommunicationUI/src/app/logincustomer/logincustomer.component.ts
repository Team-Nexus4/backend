import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
  msg:string=""
  customer = new Customer();
  customer1 = new Customer();
  constructor(public router:Router,
    public loginService:LoginserviceService) { }

  ngOnInit(): void {
  }

  checkUser(userRef:any)
  {
      let user = userRef.user;
      let pass = userRef.pass;

      
      this.customer.username=user;
      this.customer.password=pass;

        this.loginService.checkLogin(this.customer).subscribe(obj=>{
          if(obj==null)
          {
            console.log("wrong");
          }
          else{
            console.log(obj);
            this.customer1=obj;
            sessionStorage.setItem("customer",JSON.stringify(obj));
            this.router.navigate(["customerDashboard"]);
          }
        })
      
      
  }

}
