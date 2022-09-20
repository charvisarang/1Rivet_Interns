import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './core/header/blog/blog.module';
import { DocsModule } from './core/header/docs/docs.module';
import { HeaderComponent } from './core/header/header.component';
import { IconsModule } from './core/header/icons/icons.module';
import { UsersModule } from './core/header/users/users.module';
import { HomeModule } from './core/home/home.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ReactComponent } from './react/react.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ReactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    DocsModule,
    IconsModule,
    UsersModule,
    BlogModule,
    ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
