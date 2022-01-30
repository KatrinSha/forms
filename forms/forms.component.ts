import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  profileData = {};
  buttonDis = true;
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: ['Kate', Validators.required],
    lastName: ['Sha', Validators.required],
    education: ['BNTU', Validators.required],
    phone: ['', [Validators.pattern('[0-9]{12}'), Validators.required]],
    placeWork: this.fb.array([this.fb.control('', Validators.required)]),
  });

  get placeWork() {
    return this.profileForm.get('placeWork') as FormArray;
  }
  addWork() {
    this.placeWork.push(new FormControl(''));
  }

  Submit() {
    this.profileData = JSON.stringify(this.profileForm.getRawValue());
    console.log(this.profileData);
  }
}
