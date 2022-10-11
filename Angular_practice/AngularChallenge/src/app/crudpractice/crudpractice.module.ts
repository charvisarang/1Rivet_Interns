import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudpracticeRoutingModule } from './crudpractice-routing.module';
import { CrudpracticeComponent } from './crudpractice.component';
import { ChildformComponent } from './childform/childform.component';
import { ChildlistComponent } from './childlist/childlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChilddetailsComponent } from './childdetails/childdetails.component';


@NgModule({
  declarations: [
    CrudpracticeComponent,
    ChildformComponent,
    ChildlistComponent,
    ChilddetailsComponent
  ],
  imports: [
    CommonModule,
    CrudpracticeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ChildformComponent,
    ChildlistComponent
  ]
})
export class CrudpracticeModule { }
