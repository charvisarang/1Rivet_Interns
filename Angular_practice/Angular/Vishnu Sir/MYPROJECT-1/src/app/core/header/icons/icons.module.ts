import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsMainComponent } from './icons-main/icons-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IconsMainComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    IconsMainComponent
  ]
})
export class IconsModule { }
