import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent implements OnInit {
  title: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.currentMessage.subscribe(message => {
      let woeid = message;
      this._weatherService.getLocation(woeid).subscribe(
        res => console.log(res)
      );
    },
      err => console.log(err)
    );
  }


}
