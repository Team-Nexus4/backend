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
import { MyGaurds } from './app.gaurd';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { TechnicaldashboardComponent } from './technicaldashboard/technicaldashboard.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FrontloginComponent } from './frontlogin/frontlogin.component';
import { DisplayAllVendorComponent } from './display-all-vendor/display-all-vendor.component';
import { ReplaceRetailerComponent } from './replace-retailer/replace-retailer.component';
import { RetailerPlaceOrderStockComponent } from './retailer-place-order-stock/retailer-place-order-stock.component';
import { RetailerPlaceOrderComponent } from './retailer-place-order/retailer-place-order.component';
import { RetailerDisplayOrderComponent } from './retailer-display-order/retailer-display-order.component';
import { PlaceOrderByTechnicalComponent } from './place-order-by-technical/place-order-by-technical.component';
import { DisplayTechnicalComponent } from './display-technical/display-technical.component';
import { AddTechnicalComponent } from './add-technical/add-technical.component';

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
    FrontloginComponent,AddTechnicalComponent,
    DisplayTechnicalComponent,
    PlaceOrderByTechnicalComponent,
    RetailerDisplayOrderComponent,
    RetailerPlaceOrderComponent,
    RetailerPlaceOrderStockComponent,
    ReplaceRetailerComponent,
    DisplayAllVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyGaurds],
  bootstrap: [AppComponent]
})
export class AppModule { }
