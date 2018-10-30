import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home.component';
import { AuthComponent } from './auth/auth.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  // {path: '', component: HomeComponent}
  {path: 'auth', component: AuthComponent },
  {path: 'sale', component: SaleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
