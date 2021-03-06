import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MyGaurds, MyGaurdsCustomer } from './app.gaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayTechnicalComponent } from './display-technical/display-technical.component';
import { DisplaycustomerplanComponent } from './displaycustomerplan/displaycustomerplan.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { FrontloginComponent } from './frontlogin/frontlogin.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { OrderinternetplanComponent } from './orderinternetplan/orderinternetplan.component';
import { OrderlandlineplanComponent } from './orderlandlineplan/orderlandlineplan.component';
import { PlaceOrderByTechnicalComponent } from './place-order-by-technical/place-order-by-technical.component';
import { RetailerDisplayOrderComponent } from './retailer-display-order/retailer-display-order.component';
import { RetailerPlaceOrderComponent } from './retailer-place-order/retailer-place-order.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { TechnicaldashboardComponent } from './technicaldashboard/technicaldashboard.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';

const routes: Routes = [
  {path:"\loginCustomer",component:LogincustomerComponent},
  {path:"\login" , component:FrontloginComponent},
  {path:"\loginEmployee",component:EmployeeloginComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"},
  {path:"technicalDashboard",component:TechnicaldashboardComponent,canActivate:[MyGaurdsCustomer],
        children:[
          {path:"viewOrder",component:DisplayTechnicalComponent},
          
        ]},
  {path:"vendorDashboard",component:VendordashboardComponent,canActivate:[MyGaurdsCustomer],
      children:[
        {path:"viewOrder",component:DisplayTechnicalComponent},
        {path:"placeOrder",component:PlaceOrderByTechnicalComponent},
  ]},
  {path:"retailerDashboard",component:RetailerdashboardComponent,canActivate:[MyGaurdsCustomer],
        children:[
        {path:"viewOrder",component:RetailerDisplayOrderComponent},
        {path:"placeOrder",component:RetailerPlaceOrderComponent},
        //{path:"placeOrderStock",component:PlaceOrderByTechnicalComponent}
  ]},
  {path:"adminDashboard",component:AdmindashboardComponent,canActivate:[MyGaurdsCustomer]},
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
