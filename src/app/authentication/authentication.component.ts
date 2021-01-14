import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent implements OnInit {

  isLogin = false;
  buttonContent: string;

  constructor(private active: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isLoginUrl();
    this.buttonContent = this.active.snapshot.data['buttonContent'];
    document.body.classList.add('authentication');
  }

  isLoginUrl() {
    if (this.active.snapshot.routeConfig.path === 'login') {
      this.isLogin = true;
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
