import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.less']
})
export class NewUserComponent implements OnInit {

  faTimes = faTimes;
  newUserForm: FormGroup;
  existingEmails = ['dkolobaric@gmail.com', 'kolobaric@gmail.com'];

  constructor() { }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.alreadyExistingEmails.bind(this)])
    })
  }

  onSubmit() {
    console.log(this.newUserForm);
  }

  /*
  TODO: make Async Validator when we get server side
  */

  alreadyExistingEmails(control: FormControl): { [s: string]: boolean } {
    if (this.existingEmails.indexOf(control.value) !== -1) {
      return { 'existingEmail': true }
    }
    return null;
  }
}
