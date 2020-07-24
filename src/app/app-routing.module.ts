import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvpStatsComponent } from './components/pvp-stats.component';

const routes: Routes = [
  { path: '', component: PvpStatsComponent },
  { path: 'pvp-stats', component: PvpStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
