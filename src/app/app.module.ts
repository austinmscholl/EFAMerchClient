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
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AddStockDialogComponent } from './add-stock-dialog/add-stock-dialog.component';



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
    AddStockDialogComponent

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
  entryComponents: [DeleteDialogComponent, UpdateDialogComponent, AddStockDialogComponent]
})
export class AppModule { }
