import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.less']
})
export class StatesComponent implements OnInit {
  states = [];
  constructor() { }

  ngOnInit(): void {
  }

}
