import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },

  { path: "product", component: ProductlistComponent },
  {
    path: "lazyloading",
    loadChildren: () => import('./lazyloading/lazyloading.module')
    .then(m => m.LazyloadingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
