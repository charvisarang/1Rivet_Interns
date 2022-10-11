import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuddetailsComponent } from './studdetails/studdetails.component';
import { StudentsComponent } from './students.component';
import { StudformComponent } from './studform/studform.component';
import { StudlistComponent } from './studlist/studlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'studform',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StudentsComponent,

    children:[
      {
        path:'',
        component:StudformComponent
      },
      {
        path:'studlist',
        component:StudlistComponent
      },
      {
        path:'studdetails',
        component:StuddetailsComponent
      }
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
