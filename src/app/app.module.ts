import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherReportCardComponent } from './weather-report-card/weather-report-card.component';
import { WeatherReportDetailsComponent } from './weather-report-details/weather-report-details.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { GetTimeFromTimestampPipe } from './get-time-from-timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportCardComponent,
    WeatherReportDetailsComponent,
    WeatherDashboardComponent,
    GetTimeFromTimestampPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
