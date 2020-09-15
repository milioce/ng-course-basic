import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];
  positiveNumberPattern = /^\d*[1-9]$/;
  maxLengthAllowed = 50;

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(this.maxLengthAllowed)
      ]),
      id: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.positiveNumberPattern)
      ]),
      status: new FormControl('Online', Validators.required),
      instanceType: new FormControl('small')
    });
  }

  onSubmit() {
    console.log('form.value', this.form.value);
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onDebug() {
    console.clear();
    console.log('Form', this.form);
    console.group('form');
      console.log('.value', this.form.value);
      console.log('.touched', this.form.touched);
      console.log('.valid', this.form.valid);
      console.log('.errors', this.form.errors);
    console.groupEnd();

    console.group('control name');
      console.log('.touched', this.form.controls.name.touched);
      console.log('.dirty', this.form.controls.name.dirty);
      console.log('.valid', this.form.controls.name.valid);
      console.log('.errors', this.form.controls.name.errors);
    console.groupEnd();

    console.group('control id');
      console.log('.touched', this.form.controls.id.touched);
      console.log('.dirty', this.form.controls.id.dirty);
      console.log('.valid', this.form.controls.id.valid);
      console.log('.errors', this.form.controls.id.errors);
    console.groupEnd();
  }
}
