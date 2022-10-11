import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { CrudformComponent } from './crudform/crudform.component';
import { CrudlistComponent } from './crudlist/crudlist.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent,
    CrudformComponent,
    CrudlistComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
