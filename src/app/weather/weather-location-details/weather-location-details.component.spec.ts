import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationDetailsComponent } from './weather-location-details.component';

describe('WeatherLocationDetailsComponent', () => {
  let component: WeatherLocationDetailsComponent;
  let fixture: ComponentFixture<WeatherLocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
