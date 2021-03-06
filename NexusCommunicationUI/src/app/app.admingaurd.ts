import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
@Injectable()
export class AdminGaurads{
    constructor(public router:Router){}
    
    canActivate()
    {
        let username = sessionStorage.getItem("admin");
        if(username!=null)
        {
            return true;
        }
        else
        {
            this.router.navigate(["adminDashboard"]);
            return false;
        } 
    }
}