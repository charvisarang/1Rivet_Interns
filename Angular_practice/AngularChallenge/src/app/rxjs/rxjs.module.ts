import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { CreationComponent } from './creation/creation.component';
import { JoincreationComponent } from './joincreation/joincreation.component';
import { TransformationComponent } from './transformation/transformation.component';
import { FilteringComponent } from './filtering/filtering.component';


@NgModule({
  declarations: [
    RxjsComponent,
    CreationComponent,
    JoincreationComponent,
    TransformationComponent,
    FilteringComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports:[
    CreationComponent,
    FilteringComponent,
    JoincreationComponent,
    TransformationComponent
  ]
})
export class RxjsModule { }
