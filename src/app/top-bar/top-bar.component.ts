import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent {
  @Output() selection: EventEmitter<any> = new EventEmitter();
  city = '';

  submit() {
    this.selection.emit(this.city);
  }
}
