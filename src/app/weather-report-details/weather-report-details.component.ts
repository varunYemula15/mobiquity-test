import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-report-details',
  templateUrl: './weather-report-details.component.html',
  styleUrls: ['./weather-report-details.component.scss']
})
export class WeatherReportDetailsComponent implements OnInit {

  weatherData: any;
  forecastData: any;
  constructor(private apiService: ApiService, private route: Router) {

  }

  ngOnInit(): void {
    this.weatherData = window.history.state.data;
    if (!this.weatherData) {
      this.route.navigate(['dashboard']);
    } else {
      this.getForecast(this.weatherData.name);
    }
  }
  getForecast(city): any {
    this.apiService.getCityForecast(city).subscribe((data) => {
      this.forecastData = data.list.filter(element => element.dt_txt.indexOf('21:00:00') !== -1);
      console.log(this.forecastData);
    }, (error) => {
      console.log(error);
    });
  }

}
