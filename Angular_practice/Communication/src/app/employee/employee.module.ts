import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ChildformComponent } from './childform/childform.component';
import { ParenttableComponent } from './parenttable/parenttable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    ChildformComponent,
    ParenttableComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ChildformComponent,
    ParenttableComponent,
    PagenotfoundComponent
  ]
})
export class EmployeeModule { }
