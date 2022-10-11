import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpformComponent } from './empform/empform.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'empform',
        pathMatch: 'full'
      },
      {
        path: 'empform',
        component: EmpformComponent
      },
      // {
      //   path:'emplist',
      //   component:EmplistComponent
      // },
      {
        path: 'edit/:id',
        component: EmpformComponent
      },
      {
        path: 'empdetails',
        component: EmpdetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
