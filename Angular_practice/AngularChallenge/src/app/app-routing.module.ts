import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'observable', loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'crudpractice', loadChildren: () => import('./crudpractice/crudpractice.module').then(m => m.CrudpracticeModule) },
 
  
  {
    path: '**',
    component: PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
