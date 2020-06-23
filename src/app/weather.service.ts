import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weather} from './home-page/home-page.component';

const apiUrl = 'http://api.openweathermap.org/data/2.5';
const apiKey = '80ace174b6acce058d75d27d00b33929';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private cities: string[] = ['1'];

  constructor(private http: HttpClient) {
  }

  public saveCityName() {

    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  public loadCityName() {
    this.cities = JSON.parse(localStorage.getItem('cities'));
  }

  public getCityName(): string[] {
    return this.cities;
  }

  public addCityName(cityName: string) {
    this.cities.unshift(cityName);
    this.saveCityName();
  }

  public removeCityName() {
    this.cities.splice(0);
    this.saveCityName();
  }

  getCurrentWeather(city: string) {
    let weather: Weather = new Weather();

    this.http.get(`${apiUrl}/weather?q=${city}&appid=${apiKey}`).toPromise()
      .then((data: any) => {
        const sunsetTime = new Date(data.sys.sunset * 1000);
        const currentDate = new Date();

        weather.city = data.name;
        weather.conditions = data.weather[0].main;
        weather.temperature = Math.round((data.main.temp - 273.15));
        weather.humidity = data.main.humidity;
        weather.sunset = sunsetTime.toLocaleTimeString();
        weather.isDay = (currentDate.getTime() < sunsetTime.getTime());
        weather.timezone = data.timezone;
        weather.dt = currentDate.getTime() + (-25200 + weather.timezone) * 1000;
        weather.cloud = data.clouds.all;
        this.addCityName(weather.city);
      });

    return weather;
  }
}
