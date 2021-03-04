import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGaurds } from './app.gaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplaycustomerplanComponent } from './displaycustomerplan/displaycustomerplan.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { OrderinternetplanComponent } from './orderinternetplan/orderinternetplan.component';
import { OrderlandlineplanComponent } from './orderlandlineplan/orderlandlineplan.component';

const routes: Routes = [
  {path:"\login",component:LogincustomerComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"},
  {path:"\customerDashboard",component:DashboardComponent,canActivate:[MyGaurds],
      children:[
        {path:"internet",component:OrderinternetplanComponent},
        {path:"landline",component:OrderlandlineplanComponent},
        {path:"viewstatus",component:DisplaycustomerplanComponent}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
