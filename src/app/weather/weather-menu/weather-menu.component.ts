import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-menu',
  templateUrl: './weather-menu.component.html',
  styleUrls: ['./weather-menu.component.css']
})
export class WeatherMenuComponent implements OnInit {

  getWoeid: Number;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() { }

  SearchLocation(LocSearch) {
    // console.log(LocSearch);
    this._weatherService.getLocationSearch(LocSearch).subscribe(
      res => {
        this.getWoeid = res['woeid'];
        // console.log(this.getWoeid);
      },
      error => console.log(error)
    );

  }



}
