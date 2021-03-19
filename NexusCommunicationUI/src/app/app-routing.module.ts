import { Component, NgModule } from '@angular/core';
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
import { DisplayVendorComponent } from './display-vendor/display-vendor.component';
import { UpdateInternetstockVendorComponent } from './update-internetstock-vendor/update-internetstock-vendor.component';

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

import { AddTechnicalComponent } from './add-technical/add-technical.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { DisplayRetailerComponent } from './display-retailer/display-retailer.component';
import { PlanbillcomponentComponent } from './planbillcomponent/planbillcomponent.component';
import { RetailerPlaceOrderStockComponent } from './retailer-place-order-stock/retailer-place-order-stock.component';
import { CommonModule } from '@angular/common';
import { VendorViewOrdersComponent } from './vendor-view-orders/vendor-view-orders.component';
import { ReplaceRetailerComponent } from './replace-retailer/replace-retailer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

const routes: Routes = [
  {path:"\loginCustomer",component:LogincustomerComponent,children:[{path:"addcustomer",component:AddcustomerComponent}]},
  {path:"\home" , component:FrontloginComponent},
  {path:"\loginEmployee",component:EmployeeloginComponent},
  {path:"",redirectTo:"\home",pathMatch:"full"},


  
  
  {path:"\adminDashboard",component:AdmindashboardComponent,canActivate:[AdminGaurads],
    children:[
      {path:"\seeinternetplan",component:GetInternetComponent,}, 
      {path:"updateinternetplan",component:UpdateInternetComponent},
      {path:"addinternetplan",component:AddInternetComponent},
      {path:"seelandlineplan",component:GetLandlineplanComponent}, 
      {path:"updatelandlineplan",component:UpdateLandlineplanComponent}, 
      {path:"addlandlineplan",component:AddLandlineplanComponent},
      {path:"replaceretailer",component:ReplaceRetailerComponent},
      {path:"addvendor",component:AddVendorComponent},
      {path:"updatevendorinternetkit",component:UpdateInternetstockVendorComponent},
      {path:"updatevendorlandlinekit",component:UpdateLandlinestockVendorComponent},
      {path:"addretailer",component:AddRetailerComponent},
      {path:"seeallvendor",component:DisplayVendorComponent},
      {path:"addtechnical",component:AddTechnicalComponent},
      {path:"displaytechnical",component:DisplayTechnicalComponent},
     
      {path:"displayretailer",component:DisplayRetailerComponent},

    ]
  },
  
  {path:"vendorDashboard",component:VendordashboardComponent,canActivate:[],
    children:[
      {path:"vendorstock",component:DisplayVendorComponent , children:[
       
      ]},
      
    ]
  },

  {path:"technicalDashboard",component:TechnicaldashboardComponent,canActivate:[MyGaurdsCustomer],
        children:[
          {path:"viewOrder",component:DisplayTechnicalComponent},
          
        ]},
        
   {path:"vendorDashboard",component:VendordashboardComponent,canActivate:[MyGaurdsCustomer],
       children:[
         {path:"viewOrders",component:VendorViewOrdersComponent},

   ]},

  {path:"retailerDashboard",component:RetailerdashboardComponent,canActivate:[MyGaurdsCustomer],
        children:[
        {path:"viewOrder",component:RetailerDisplayOrderComponent},
        {path:"placeOrderStock",component:RetailerPlaceOrderStockComponent},
  ]},
  

  {path:"customerDashboard",component:DashboardComponent,canActivate:[MyGaurds],
      children:[
        {path:"internet",component:OrderinternetplanComponent},
        {path:"landline",component:OrderlandlineplanComponent},
        {path:"viewstatus",component:DisplaycustomerplanComponent},
        {path:"viewBill",component:PlanbillcomponentComponent},
  ]},
  {path:"addcustomer",component:AddcustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
