import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherDashboardComponent} from './weather-dashboard/weather-dashboard.component';
import { WeatherReportDetailsComponent } from './weather-report-details/weather-report-details.component';
const routes: Routes = [
  { path: 'dashboard', component: WeatherDashboardComponent },
  { path: 'detailedDashboard', component:  WeatherReportDetailsComponent},
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
