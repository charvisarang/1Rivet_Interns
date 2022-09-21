import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { ServicesModule } from './services/services.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersModule } from './customers/customers.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformModule } from './reactiveform/reactiveform.module';
import { SharedModule } from './shared/shared.module';
import { CurrencyPipe } from './pipes/currency.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { CurrentComponent } from './pipes/current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    CurrencyPipe,
    GenderPipe,
    CurrentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductModule,
    ServicesModule,
    AboutModule,
    CustomersModule,
    ReactiveformModule,
    ReactiveFormsModule,
    SharedModule

    // FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
