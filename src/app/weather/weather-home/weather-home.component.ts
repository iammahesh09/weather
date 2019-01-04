import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnChanges, OnInit {

  @Input() getWoeid: Number;

  constructor(private _weatherService: WeatherService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    let data = changes.getWoeid.currentValue
    this._weatherService.changeMessage(data);
  }

  ngOnInit() {
  }


}
