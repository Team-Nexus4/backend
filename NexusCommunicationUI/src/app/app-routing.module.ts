import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGaurds } from './app.gaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplaycustomerplanComponent } from './displaycustomerplan/displaycustomerplan.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { FrontloginComponent } from './frontlogin/frontlogin.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { OrderinternetplanComponent } from './orderinternetplan/orderinternetplan.component';
import { OrderlandlineplanComponent } from './orderlandlineplan/orderlandlineplan.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { TechnicaldashboardComponent } from './technicaldashboard/technicaldashboard.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';

const routes: Routes = [
  {path:"\loginCustomer",component:LogincustomerComponent},
  {path:"\login" , component:FrontloginComponent},
  {path:"\loginEmployee",component:EmployeeloginComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"},
  {path:"\technicalDashboard",component:TechnicaldashboardComponent},
  {path:"vendorDashboard",component:VendordashboardComponent,canActivate:[]},
  {path:"retailerDashboard",component:RetailerdashboardComponent},
  {path:"customerDashboard",component:DashboardComponent,canActivate:[MyGaurds],
      children:[
        {path:"internet",component:OrderinternetplanComponent},
        {path:"landline",component:OrderlandlineplanComponent},
        {path:"viewstatus",component:DisplaycustomerplanComponent}
      ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
