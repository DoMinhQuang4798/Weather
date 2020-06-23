import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HistoryComponent} from './history/history.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    TopBarComponent,
    HomePageComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2PaginationModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
