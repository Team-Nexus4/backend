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
import { DisplayVendorComponent } from './display-vendor/display-vendor.component';
import { UpdateInternetstockVendorComponent } from './update-internetstock-vendor/update-internetstock-vendor.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AddInternetComponent } from './add-internet/add-internet.component';
import { DeleteInternetComponent } from './delete-internet/delete-internet.component';
import { UpdateInternetComponent } from './update-internet/update-internet.component';
import { GetInternetComponent } from './get-internet/get-internet.component';
import { UpdateLandlinestockVendorComponent } from './update-landlinestock-vendor/update-landlinestock-vendor.component';
import { GetLandlineplanComponent } from './get-landlineplan/get-landlineplan.component';
import { UpdateLandlineplanComponent } from './update-landlineplan/update-landlineplan.component';
import { DeleteLandlineplanComponent } from './delete-landlineplan/delete-landlineplan.component';
import { AddLandlineplanComponent } from './add-landlineplan/add-landlineplan.component';
import { AdminGaurads } from './app.admingaurd';

const routes: Routes = [
  {path:"\loginCustomer",component:LogincustomerComponent},
  {path:"\login" , component:FrontloginComponent},
  {path:"\loginEmployee",component:EmployeeloginComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"},
  {path:"\technicalDashboard",component:TechnicaldashboardComponent},
  {path:"\adminDashboard",component:AdmindashboardComponent,canActivate:[AdminGaurads],
    children:[
      {path:"addinternetplan",component:AddInternetComponent},
      {path:"deleteinternetplan",component:DeleteInternetComponent},
      {path:"updateinternetplan",component:UpdateInternetComponent},
      {path:"seeinternetplan",component:GetInternetComponent},
      {path:"addlandlineplan",component:AddLandlineplanComponent},
      {path:"deletelandlineplan",component:DeleteLandlineplanComponent},
      {path:"updatelandlineplan",component:UpdateLandlineplanComponent},
      {path:"seelandlineplan",component:GetLandlineplanComponent},
      {path:"addvendor",component:AddVendorComponent},
      {path:"updatevendorinternetkit",component:UpdateInternetstockVendorComponent},
      {path:"updatevendorlandlinekit",component:UpdateLandlinestockVendorComponent},
      {path:"seeallvendor",component:DisplayVendorComponent,
      children:[
        {path:"updatevendorinternetkit",component:UpdateInternetstockVendorComponent},
      ]
    },
    ]
  },
  
  {path:"vendorDashboard",component:VendordashboardComponent,canActivate:[AdminGaurads],
    children:[
      {path:"vendorstock",component:DisplayVendorComponent , children:[
        
      ]},
      {path:"updateinternetstock",component:UpdateInternetstockVendorComponent}
    ]
  },
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
