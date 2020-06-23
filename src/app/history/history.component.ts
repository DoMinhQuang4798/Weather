import {HistoryService} from '../history.service';
import {Component, EventEmitter, Output} from '@angular/core';
import {Weather} from '../home-page/home-page.component';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent {
  @Output() select: EventEmitter<Weather> = new EventEmitter<Weather>();
  page: number = 1;

  public cityArr = this.historyService.add();

  constructor(public historyService: HistoryService,
              public weatherService: WeatherService) {
  }
}
