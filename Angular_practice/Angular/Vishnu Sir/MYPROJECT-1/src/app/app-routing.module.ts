import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogMainComponent } from './core/header/blog/blog-main/blog-main.component';
import { AdduserComponent } from './core/header/docs/adduser/adduser.component';

import { DocsMainComponent } from './core/header/docs/docs-main/docs-main.component';
import { EditPageComponent } from './core/header/docs/edit-page/edit-page.component';
import { IconsMainComponent } from './core/header/icons/icons-main/icons-main.component';
import { PagenotfoundComponent } from './core/header/pagenotfound/pagenotfound.component';
import { LoginComponent } from './core/header/users/login/login.component';
import { RegisterComponent } from './core/header/users/register/register.component';

import { HomeMainComponent } from './core/home/home-main/home-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeMainComponent
  },
  {
    path: 'docs',
    component: DocsMainComponent,
  },
  {
    path:'edit_page',
    component:EditPageComponent
  },
  {
    path:'adduser',
    component:AdduserComponent
  },
  {
    path: 'icons',
    component: IconsMainComponent
  },
  {
    path: 'blog',
    component: BlogMainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
