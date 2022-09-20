import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main/blog-main.component';



@NgModule({
  declarations: [
    BlogMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BlogMainComponent
  ]
})
export class BlogModule { }
