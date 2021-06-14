import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherReportDetailsComponent } from './weather-report-details.component';

describe('WeatherReportDetailsComponent', () => {
  let component: WeatherReportDetailsComponent;
  let fixture: ComponentFixture<WeatherReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherReportDetailsComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
