import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Location } from '@angular/common';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


location: Location

/* set body background color only for authentication component */
var currentUrl = location.pathname;
if (currentUrl.includes("authentication")) {
  var body = document.body.style.backgroundColor = "#1d1d1d";
}
