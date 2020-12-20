import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';
import { LeagueComponent } from './league/league.component';
import { StatesComponent } from './league/states/states.component';
import { TablesComponent } from './league/tables/tables.component';
import { MasterComponent } from './master/master.component';
import { TeamComponent } from './team/team.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'league', component: LeagueComponent },
  { path: 'league/fixtures', component: FixturesComponent },
  { path: 'league/table', component: TablesComponent },
  { path: 'league/states', component: StatesComponent },
  { path: 'master', component: MasterComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'team', component: TeamComponent },
  { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
