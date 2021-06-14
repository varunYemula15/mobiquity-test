import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  getCityWeatherReport(city: string, state: string = 'uk'): any {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }

  getCityForecast(city: string, state: string = 'uk'): any {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
}
