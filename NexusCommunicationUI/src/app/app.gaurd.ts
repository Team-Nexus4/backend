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
            this.router.navigate(["login"]);
            return false;
        } 
    }
}