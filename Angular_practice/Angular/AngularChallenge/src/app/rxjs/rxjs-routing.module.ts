import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { FilteringComponent } from './filtering/filtering.component';
import { JoincreationComponent } from './joincreation/joincreation.component';
import { RxjsComponent } from './rxjs.component';
import { TransformationComponent } from './transformation/transformation.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      {
        path: 'creation',
        component: CreationComponent
      },
      {
        path: 'filtering',
        component: FilteringComponent
      },
      {
        path: 'joincreation',
        component: JoincreationComponent
      },
      {
        path: 'transformation',
        component: TransformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
