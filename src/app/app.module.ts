import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './main/menu/menu.component';
import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { ProductAddComponent } from './main/product-add/product-add.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
