import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[ProductsComponent]
})
export class AppModule { }
