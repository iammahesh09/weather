import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';
import { AppRoutingModule } from './App.Routing';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import { WeatherMenuComponent } from './weather/weather-menu/weather-menu.component';
import { WeatherLocationDetailsComponent } from './weather/weather-location-details/weather-location-details.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherLocationComponent,
    ChartDemoComponent,
    WeatherMenuComponent,
    WeatherLocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
