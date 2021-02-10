import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeagueComponent } from './league/league.component';
import { MasterComponent } from './master/master.component';
import { TrainingComponent } from './training/training.component';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { FixturesComponent } from './league/fixtures/fixtures.component';
import { TablesComponent } from './league/table/table.component';
import { StatesComponent } from './league/states/states.component';
import { PlayersComponent } from './team/players/players.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { TeamsComponent } from './league/teams/teams.component';
import { TeamDetailsComponent } from './league/teams/team-details/team-details.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthenticationService } from './authentication/authentication.service';



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
    PlayersComponent,
    AuthenticationComponent,
    NewUserComponent,
    TeamsComponent,
    TeamDetailsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
