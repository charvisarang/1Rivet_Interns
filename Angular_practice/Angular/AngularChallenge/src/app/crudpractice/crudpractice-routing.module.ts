import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChilddetailsComponent } from './childdetails/childdetails.component';
import { ChildformComponent } from './childform/childform.component';
import { ChildlistComponent } from './childlist/childlist.component';
import { CrudpracticeComponent } from './crudpractice.component';

const routes: Routes = [
  {
    path: '',
    component: CrudpracticeComponent,
    children:[
      {
        path:'',
        component:ChildformComponent
      },
      {
        path:'childlist',
        component:ChildlistComponent
      },
      {
        path:'childdetails',
        component:ChilddetailsComponent
      },
      {
        path:'crudpractice/:edit',
        component:ChildformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudpracticeRoutingModule { }
