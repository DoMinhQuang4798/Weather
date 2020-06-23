import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CurrentWeatherComponent} from '../current-weather/current-weather.component';

export class Weather {
  city: string;
  conditions: string;
  temperature: number;
  humidity: number;
  dt: any;
  timezone: number;
  cloud: number;
  sunset: any;
  isDay: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  @ViewChild('displayWeather', {static: true})
  private displayWeather: CurrentWeatherComponent;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route
      .queryParams.subscribe(params => {
        const cityName = params.cityName;

        if (this.displayWeather) {
          this.displayWeather.update(cityName);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
