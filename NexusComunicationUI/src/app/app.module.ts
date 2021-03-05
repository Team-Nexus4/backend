import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTechnicalComponent } from './add-technical/add-technical.component';
import { DisplayTechnicalComponent } from './display-technical/display-technical.component';
import { PlaceOrderByTechnicalComponent } from './place-order-by-technical/place-order-by-technical.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RetailerDisplayOrderComponent } from './retailer-display-order/retailer-display-order.component';
import { RetailerPlaceOrderComponent } from './retailer-place-order/retailer-place-order.component';
import { RetailerPlaceOrderStockComponent } from './retailer-place-order-stock/retailer-place-order-stock.component';
import { ReplaceRetailerComponent } from './replace-retailer/replace-retailer.component'

@NgModule({
  declarations: [
    AppComponent,
    AddTechnicalComponent,
    DisplayTechnicalComponent,
    PlaceOrderByTechnicalComponent,
    RetailerDisplayOrderComponent,
    RetailerPlaceOrderComponent,
    RetailerPlaceOrderStockComponent,
    ReplaceRetailerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
