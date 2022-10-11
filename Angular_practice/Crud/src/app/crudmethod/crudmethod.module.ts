import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudmethodRoutingModule } from './crudmethod-routing.module';
import { CrudlistComponent } from './crudlist/crudlist.component';
import { CrudformComponent } from '../crud/crudform/crudform.component';
// import { CrudempComponent } from './crudemp/crudemp.component';


@NgModule({
  declarations: [
    CrudformComponent,
    CrudlistComponent
  ],
  imports: [
    CommonModule,
    CrudmethodRoutingModule
  ],
  
})

export class CrudmethodModule { }
