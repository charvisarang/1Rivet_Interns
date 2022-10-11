import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import { EmployeeModule } from './employee/employee.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { CustompipesPipe } from './custompipes.pipe';
import { CrudserviceService } from './crudpractice/service/crudservice.service';
import { EmpserviceService } from './employee/service/empservice.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    CustompipesPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [CrudserviceService, EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
