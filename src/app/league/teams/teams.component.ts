import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {

  teams = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams();
  }

}
