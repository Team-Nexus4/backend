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
    UpdatecustomerComponent
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
