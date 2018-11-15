import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { AuthComponent } from './auth/auth.component';
import { SaleComponent } from './sale/sale.component';
import { AdminComponent } from './admin/admin.component';
import { MensComponent } from './mens/mens.component';
import { UsercartGuard } from './usercart.guard';
import { CartComponent } from './cart/cart.component';
import { AdminGuard } from './admin.guard';
import { HomeComponent } from './home/home.component';
import { WomensComponent } from './womens/womens.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { AddInventoryDialogComponent } from './dialogs/add-inventory-dialog/add-stock-dialog.component';
import { UpdateInventoryDialogComponent } from './dialogs/update-inventory-dialog/update-inventory-dialog.component';
import { DeleteCartitemDialogComponent } from './dialogs/delete-cartitem-dialog/delete-cartitem-dialog.component';
import { CartstockDialogComponent } from './dialogs/cartstock-dialog/cartstock-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    SaleComponent,
    AdminComponent,
    MensComponent,
    CartComponent,
    HomeComponent,
    WomensComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
    AddInventoryDialogComponent,
    UpdateInventoryDialogComponent,
    DeleteCartitemDialogComponent,
    CartstockDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [UsercartGuard, AdminGuard],
  bootstrap: [AppComponent],
  // all dialogs required being imported into entryComponents
  entryComponents: [DeleteDialogComponent, UpdateDialogComponent, AddInventoryDialogComponent, UpdateInventoryDialogComponent, DeleteCartitemDialogComponent, CartstockDialogComponent]
})
export class AppModule { }
