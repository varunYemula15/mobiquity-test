import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {

  cities = ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Liverpool'];
  constructor() { }

  ngOnInit(): void {
  }

}
