import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpformComponent } from './empform/empform.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustompipesPipe } from '../custompipes.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpformComponent,
    EmplistComponent,
    EmpdetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports:[
    EmpformComponent,
    EmplistComponent,
    EmpdetailsComponent
  ]
})
export class EmployeeModule { }
