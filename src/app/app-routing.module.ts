import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundComponent } from './Components/notFound/notFound.component';
import { UserLoginComponent } from './Components/userLogin/userLogin.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { AuthGuard } from './Gaurds/auth.guard';

const routes: Routes = [
  {path:'',component:MainLayoutComponent, children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},//default path
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'products/:pid',component:ProductDetailsComponent},
    {path:'orders',component:OrderMasterComponent,canActivate:[AuthGuard]}
  ]},
  
  {path:'login',component:UserLoginComponent},
  {path:'logout',component:UserLoginComponent},

  {path:'**',component:NotFoundComponent} //wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
