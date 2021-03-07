import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLandlineplanComponent } from './add-landlineplan/add-landlineplan.component';

import { DeleteLandlineplanComponent } from './delete-landlineplan/delete-landlineplan.component';
import { GetLandlineplanComponent } from './get-landlineplan/get-landlineplan.component';
import { UpdateLandlineplanComponent } from './update-landlineplan/update-landlineplan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { DisplaycustomerplanComponent } from './displaycustomerplan/displaycustomerplan.component';
import { OrderlandlineplanComponent } from './orderlandlineplan/orderlandlineplan.component';
import { OrderinternetplanComponent } from './orderinternetplan/orderinternetplan.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { MyGaurds, MyGaurdsCustomer } from './app.gaurd';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { TechnicaldashboardComponent } from './technicaldashboard/technicaldashboard.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FrontloginComponent } from './frontlogin/frontlogin.component';

import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { UpdateInternetstockVendorComponent } from './update-internetstock-vendor/update-internetstock-vendor.component';
import { UpdateLandlinestockVendorComponent } from './update-landlinestock-vendor/update-landlinestock-vendor.component';
import { DisplayVendorComponent } from './display-vendor/display-vendor.component';
import { AddInternetComponent } from './add-internet/add-internet.component';
import { DeleteInternetComponent } from './delete-internet/delete-internet.component';
import { UpdateInternetComponent } from './update-internet/update-internet.component';
import { GetInternetComponent } from './get-internet/get-internet.component';
import { AdminGaurads } from './app.admingaurd';

import { DisplayAllVendorComponent } from './display-all-vendor/display-all-vendor.component';
import { ReplaceRetailerComponent } from './replace-retailer/replace-retailer.component';
import { RetailerPlaceOrderStockComponent } from './retailer-place-order-stock/retailer-place-order-stock.component';
import { RetailerPlaceOrderComponent } from './retailer-place-order/retailer-place-order.component';
import { RetailerDisplayOrderComponent } from './retailer-display-order/retailer-display-order.component';
import { PlaceOrderByTechnicalComponent } from './place-order-by-technical/place-order-by-technical.component';
import { DisplayTechnicalComponent } from './display-technical/display-technical.component';
import { AddTechnicalComponent } from './add-technical/add-technical.component';
import { PlanbillcomponentComponent } from './planbillcomponent/planbillcomponent.component';
import { CommonModule } from '@angular/common';
import { VendorViewOrdersComponent } from './vendor-view-orders/vendor-view-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    AddLandlineplanComponent,
    DeleteLandlineplanComponent,
    GetLandlineplanComponent,
    UpdateLandlineplanComponent,
    DashboardComponent,
    LogincustomerComponent,
    DeletecustomerComponent,
    DisplaycustomerplanComponent,
    OrderlandlineplanComponent,
    OrderinternetplanComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    EmployeeloginComponent,
    VendordashboardComponent,
    TechnicaldashboardComponent,
    RetailerdashboardComponent,
    AdmindashboardComponent,

    FrontloginComponent,
    AddVendorComponent,
    UpdateInternetstockVendorComponent,
    UpdateLandlinestockVendorComponent,
    DisplayVendorComponent,
    AddInternetComponent,
    DeleteInternetComponent,
    UpdateInternetComponent,
    GetInternetComponent,

    FrontloginComponent,AddTechnicalComponent,
    DisplayTechnicalComponent,
    PlaceOrderByTechnicalComponent,
    RetailerDisplayOrderComponent,
    RetailerPlaceOrderComponent,
    RetailerPlaceOrderStockComponent,
    ReplaceRetailerComponent,
    DisplayAllVendorComponent,
    PlanbillcomponentComponent,
    VendorViewOrdersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,CommonModule
  ],

  

  providers: [MyGaurds,MyGaurdsCustomer,AdminGaurads],

  bootstrap: [AppComponent]
})
export class AppModule { }
