import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PipesComponent } from './pipes/pipes.component';
import { CurrencyPipe } from './pipes/pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    PipesComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
