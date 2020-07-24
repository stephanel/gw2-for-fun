import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PvpStatsComponent } from './components/pvp-stats.component';

import { GW2APICONFIG } from './services/gw2api-pvp-stats.service';
import { gw2apiConfig } from './gw2api.config';

import { RequestInterceptor } from './infrastructure/services/request-interceptor.service'; 

@NgModule({
  declarations: [
    AppComponent,
    PvpStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: GW2APICONFIG, useValue: gw2apiConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
