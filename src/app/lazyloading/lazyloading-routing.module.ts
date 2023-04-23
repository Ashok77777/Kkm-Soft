import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

const routes: Routes = [
  { path: "lazy", component: LazyloadingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
