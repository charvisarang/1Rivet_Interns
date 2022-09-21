import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { ChildformComponent } from './childform/childform.component';
import { EmployeeComponent } from './employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParenttableComponent } from './parenttable/parenttable.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ChildformComponent'
  },
  {
    path: 'childform',
    component: ChildComponent
  },
  {
    path: 'parenttable',
    component: ParenttableComponent
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
