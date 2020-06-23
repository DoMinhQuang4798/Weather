import {Component} from '@angular/core';
import {Weather} from '../home-page/home-page.component';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent {

  weather: Weather = {
    city: '',
    conditions: '-',
    temperature: 0,
    humidity: 0,
    dt: 0,
    timezone: 0,
    cloud: 0,
    isDay: false,
    sunset: '',
  };

  constructor(private weatherService: WeatherService) {
  }

  async update(cityName: string) {
    if (cityName) {
      this.weather = await this.weatherService.getCurrentWeather(cityName);
    }
  }
}
