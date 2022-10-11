import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildformComponent } from './childform/childform.component';
import { EmployeeComponent } from './employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParenttableComponent } from './parenttable/parenttable.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {
        path:'childform',
        component:ChildformComponent,
      },
      {
        path:'parenttable',
        component:ParenttableComponent
        
      }
    ]
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
