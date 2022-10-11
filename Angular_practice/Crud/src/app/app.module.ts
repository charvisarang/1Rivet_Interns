import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule} from  '@angular/forms';
import {FormsModule} from '@angular/forms'
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
