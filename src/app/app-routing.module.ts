import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SaleComponent } from './sale/sale.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component'
import { UsercartGuard } from './usercart.guard';
import { AdminGuard } from './admin.guard';
import { MensComponent } from './mens/mens.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent },
  {path: 'sale', component: SaleComponent },
  {path: 'admin', canActivate:[AdminGuard], component: AdminComponent },
  {path: 'cart', canActivate:[UsercartGuard], component: CartComponent },
  {path: 'mens', component: MensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
