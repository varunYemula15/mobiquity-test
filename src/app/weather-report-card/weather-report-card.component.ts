import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-report-card',
  templateUrl: './weather-report-card.component.html',
  styleUrls: ['./weather-report-card.component.scss']
})
export class WeatherReportCardComponent implements OnInit {
  @Input() city;
  response: any;
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.getCityWeatherReport();
  }

  getCityWeatherReport(): any {
    this.apiService.getCityWeatherReport(this.city).subscribe((data) => {
     this.response = data;
    }, (error) => {
      console.log(error);
    });
  }

  navigateTo(): void {
    this.route.navigate(['detailedDashboard'], {
      state: { data: this.response }
    });
  }
}
