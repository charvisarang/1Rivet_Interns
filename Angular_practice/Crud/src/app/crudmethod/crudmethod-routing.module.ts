import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudmethodComponent } from './crudmethod.component';

const routes: Routes = [{ path: '', component: CrudmethodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudmethodRoutingModule { }
