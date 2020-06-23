import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WeatherMiniProject';

  constructor(public weatherService: WeatherService) {
  }

ngOnInit(): void {
    this.weatherService.loadCityName();
}
}
