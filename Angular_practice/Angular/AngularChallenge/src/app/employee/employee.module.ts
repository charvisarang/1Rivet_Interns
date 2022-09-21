import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpformComponent } from './empform/empform.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpformComponent,
    EmplistComponent,
    EmpdetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports:[
    EmpdetailsComponent,
    EmpformComponent,EmplistComponent
  ]
})
export class EmployeeModule { }
