import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  isAuthentication = false;

  constructor(private location: Location) { }

  ngOnInit() {
    this.isAuthenticationUrl();
  }


  isAuthenticationUrl() {
    var currentUrl = this.location.path();
    if (currentUrl.includes("authentication")) {
      this.isAuthentication = true;
    } else {
      this.isAuthentication = false;
    }
  }

}
