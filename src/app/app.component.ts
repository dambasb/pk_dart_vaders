import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthenticationService } from './authentication/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  isAuthentication: boolean = false;
  subscription: any;
  test = false;

  constructor(
    private location: Location,
    private authenticationService: AuthenticationService,
    private active: ActivatedRoute) { }

  ngOnInit() {
    this.isAuthenticationUrl();
    this.subscription = this.authenticationService.getAuthenticationEmitter()
      .subscribe(item => {

        /* Toggle Sidebar */
        this.isAuthentication = item;

        if (!item) {
          document.querySelector('body').classList.remove('authentication');
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
