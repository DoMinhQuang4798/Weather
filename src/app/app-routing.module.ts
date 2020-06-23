
import {HomePageComponent} from './home-page/home-page.component';
import {HistoryComponent} from './history/history.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'history', component: HistoryComponent},

  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
