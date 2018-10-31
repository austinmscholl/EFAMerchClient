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

import { ItemComponent } from './item/item.component';


import { AuthComponent } from './auth/auth.component';
import { SaleComponent } from './sale/sale.component';
import { AdminComponent } from './admin/admin.component';
import { MensComponent } from './mens/mens.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    AuthComponent,
    SaleComponent,
    AdminComponent,
    MensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
