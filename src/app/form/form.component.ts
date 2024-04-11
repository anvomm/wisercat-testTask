import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { forbiddenWorkingExperience } from '../shared/forbidden-working-experience.directive';
import { MessagesComponent, Type } from '../message/message.component';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule, MessagesComponent],
})
export class FormComponent {
  showMessage = false;
  messageText = '';
  messageType: 'info' | 'success' | 'error' = 'info';

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    workingExperience: new FormControl(0, [
      Validators.required,
      forbiddenWorkingExperience(1),
    ]),
  });

  clearMessage() {
    this.showMessage = false;
  }

  submitForm() {
    this.showMessage = true;
    if (this.form.invalid) {
      this.messageText = 'Please check fields values!';
      this.messageType = 'error';
      return;
    }
    this.messageType = 'success';
    this.messageText = 'The form is successfully submitted!';
  }

  clearForm() {
    if (!this.form.dirty) {
      this.showMessage = false;
      this.form.reset();
      return;
    } else {
      this.form.reset();
      this.showMessage = true;
      this.messageText = 'The form was cleared!';
      this.messageType = 'info';
    }
  }
}
