import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyGaurds implements CanActivate
{
    constructor(public router:Router){}
    
    canActivate()
    {
        let customer = sessionStorage.getItem("customer");
        if(customer!=null)
        {
            return true;
        }
        else
        {
            this.router.navigate(["home"]);
            return false;
        } 
    }
}

@Injectable()
export class MyGaurdsCustomer implements CanActivate
{
    constructor(public router:Router){}
    
    canActivate()
    {
        let employee = sessionStorage.getItem("employee");
        if(employee!=null)
        {
            return true;
        }
        else
        {
            this.router.navigate(["home"]);
            return false;
        } 
    }
}