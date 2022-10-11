import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { ListComponent } from './list/list.component';
import { FromeventComponent } from './fromevent/fromevent.component';

@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromeventComponent,
   
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports:[
  ]
  
})
export class ObservableModule { }
