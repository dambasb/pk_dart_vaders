import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent implements OnInit {

  isLogin = false;
  buttonContent: string
  authenticationForm: FormGroup;
  existingEmails = ['dkolobaric@gmail.com'];

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoginUrl();
    this.buttonContent = this.active.snapshot.data['buttonContent'];
    document.body.classList.add('authentication');

    this.authenticationForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.alreadyExistingEmails.bind(this)]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
    })
  }

  isLoginUrl() {
    if (this.active.snapshot.routeConfig.path === 'login') {
      this.isLogin = true;
    }
  }

  goHome() {
    this.router.navigate(['dashboard']);
    this.authenticationService.emitIsAuthenticationEvent(false);
  }

  onSubmit() {
    console.log(this.authenticationForm);
  }

  alreadyExistingEmails(control: FormControl): { [s: string]: boolean } {
    if (this.existingEmails.indexOf(control.value) !== -1) {
      return { 'existingEmail': true }
    }
    return null;
  }
}

