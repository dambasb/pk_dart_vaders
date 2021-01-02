import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent implements OnInit {

  isLogin = false;
  buttonContent: string;

  constructor(private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoginUrl();
    this.buttonContent = this.active.snapshot.data['buttonContent'];
  }

  isLoginUrl() {
    if (this.active.snapshot.routeConfig.path === 'login') {
      this.isLogin = true;
    }
  }

}
