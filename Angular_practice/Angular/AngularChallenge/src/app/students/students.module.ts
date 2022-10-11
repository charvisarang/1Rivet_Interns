import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudformComponent } from './studform/studform.component';
import { StudlistComponent } from './studlist/studlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StuddetailsComponent } from './studdetails/studdetails.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentsComponent,
    StudformComponent,
    StudlistComponent,
    StuddetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    StudformComponent,
    StudlistComponent,
    StuddetailsComponent
  ]
})
export class StudentsModule { }
