import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './header/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PagenotfoundComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,SidebarComponent
  ]
})
export class CoreModule { }
