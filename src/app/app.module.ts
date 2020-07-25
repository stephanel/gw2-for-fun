import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PvpStatsComponent } from './components/pvp-stats/pvp-stats.component';
import { WinLossStatsComponent } from './components/win-loss-stats/win-loss-stats.component';

import { GW2APICONFIG } from './services/gw2api-pvp-stats.service';
import { gw2apiConfig } from './gw2api.config';

import { RequestInterceptor } from './infrastructure/services/request-interceptor.service'; 

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    PvpStatsComponent,
    WinLossStatsComponent
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
