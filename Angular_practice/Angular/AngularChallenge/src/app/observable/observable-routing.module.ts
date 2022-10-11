import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromeventComponent } from './fromevent/fromevent.component';
import { ListComponent } from './list/list.component';
import { ObservableComponent } from './observable.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'list'
      // },
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'fromevent',
        component: FromeventComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
