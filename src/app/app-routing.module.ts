import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerdelivComponent } from './customerdeliv/customerdeliv.component';
import { InquirydetailsComponent } from './inquirydetails/inquirydetails.component';
import { LoginComponent } from './login/login.component';
import { PayagesComponent } from './payages/payages.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { CreditmemoComponent } from './creditmemo/creditmemo.component';



const routes: Routes = [  
{path:'login', component:LoginComponent}, 
{path:'profile', component:DashboardComponent}, 
{path:'creditmemo',component:CreditmemoComponent}, 
{path:'custmdeliv', component:CustomerdelivComponent}, 
{path:'inquiry', component:InquirydetailsComponent}, 
{path:'invoicedetails',component:InvoiceDetailsComponent}, 
{path:'payages', component:PayagesComponent}, 
{path:'saleorder',component:SalesorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
