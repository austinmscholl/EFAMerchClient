import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatInputModule, MatCheckboxModule]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
