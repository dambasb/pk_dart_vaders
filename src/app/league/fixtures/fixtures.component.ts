import { Component, OnInit } from '@angular/core';
import { FixturesService } from './fixtures.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.less'],
  providers: [FixturesService]
})
export class FixturesComponent implements OnInit {

  fixtures = [];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit(): void {
    this.fixtures = this.fixturesService.getFixtures();
  }

}
