
import {WeatherService} from './weather.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HistoryService {

  constructor(private weatherService: WeatherService) {
  }

  public add() {
    return this.weatherService.getCityName();
  }
}
