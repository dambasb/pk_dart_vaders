import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeagueComponent } from './league/league.component';
import { MasterComponent } from './master/master.component';
import { TrainingComponent } from './training/training.component';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';
import { TablesComponent } from './league/tables/tables.component';
import { StatesComponent } from './league/states/states.component';
import { PlayersComponent } from './team/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LeagueComponent,
    MasterComponent,
    TrainingComponent,
    TeamComponent,
    AdminComponent,
    FixturesComponent,
    TablesComponent,
    StatesComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
