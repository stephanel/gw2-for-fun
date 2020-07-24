import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvpStatsComponent } from './components/pvp-stats.component';

import { GW2APICONFIG } from './services/gw2api-pvp-stats.service';
import { Gw2ApiConfig } from './models/gw2api-config';
import { gw2apiConfig } from './gw2api.config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PvpStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: GW2APICONFIG, useValue: gw2apiConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
