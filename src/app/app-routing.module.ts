import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductAddComponent } from './main/product-add/product-add.component';
import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { ProductListComponent } from './main/product-list/product-list.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "mainMenu", component: MainComponent, children:[
    {path: "", component: ProductListComponent},
    {path: "add", component: ProductAddComponent},
    {path: "detail/:id", component: ProductDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
