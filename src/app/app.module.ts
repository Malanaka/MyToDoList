import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TdlsModule } from './tdls/tdls.module';
import { TdlsRoutingModule } from './tdls/tdls-routing.module';
import { TdlsMaterialModule } from './tdls/tdls-material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TdlsModule,
    TdlsRoutingModule,
    TdlsMaterialModule, //
    MatToolbarModule,
    FormsModule,
    MatDatepickerModule, //
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
