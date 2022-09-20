import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsMainComponent } from './docs-main/docs-main.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';





@NgModule({
  declarations: [
    DocsMainComponent,
    AdduserComponent,
    EditPageComponent,
    FilterPipe
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    DocsMainComponent
  ]
})
export class DocsModule { }
