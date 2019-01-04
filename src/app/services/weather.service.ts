import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl = 'https://www.metaweather.com';

  private messageSource = new BehaviorSubject('');

  currentMessage = this.messageSource.asObservable();

  constructor(private _http: HttpClient) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  getLocationSearch(locationsearch): Observable<any> {
    return this._http.get(this.weatherUrl + '/api/location/search/?query=' + locationsearch).pipe(map(res => res[0]));
  }

  getLocation(woeid) {
    return this._http.get(this.weatherUrl + '/api/location/' + woeid);
  }

  dailyForecast() {
    return this._http.get('http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22')
      .pipe(map(result => result));
  }


}
