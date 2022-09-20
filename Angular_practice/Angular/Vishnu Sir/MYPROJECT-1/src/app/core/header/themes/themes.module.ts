import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesMainComponent } from './themes-main/themes-main.component';
import { SigupComponent } from './sigup/sigup.component';



@NgModule({
  declarations: [
    ThemesMainComponent,
    SigupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ThemesMainComponent,SigupComponent
  ]
})
export class ThemesModule { }
