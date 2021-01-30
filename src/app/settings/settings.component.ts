import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  existingEmails = ['dkolobaric@gmail.com', 'kolobaric@gmail.com'];

  constructor() { }

  ngOnInit(): void {
    this.settingsForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'image': new FormControl(null),
      'email': new FormControl(null, [Validators.email, this.alreadyExistingEmails.bind(this)]),
      'password': new FormControl(null),
      'confirmPassword': new FormControl(null)
    })
  }

  onImagePicked(event: Event) {
    /* Extract file that was added */
    const file = (event.target as HTMLInputElement).files;
    console.log(file);
    this.settingsForm.patchValue({ 'image': file });
    this.settingsForm.get('image').updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.settingsForm);
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
