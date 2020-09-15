import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Server } from '../server.model';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<Server>();

  instanceTypeOptions = ['large', 'medium', 'small'];
  positiveNumberPattern = /^\d*[1-9]$/;
  maxLengthAllowed = 50;
  forbiddenServerNames = ['Test', 'Server'];
  form: FormGroup;

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl;
  }

  get instanceType(): FormControl {
    return this.form.get('instanceType') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(this.maxLengthAllowed),
        this.forbiddenNames.bind(this)
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
    if (this.form.valid) {
      const server = new Server(
        this.name.value,
        this.id.value,
        this.status.value,
        this.instanceType.value
      );
      this.submit.emit(server);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel() {
    this.cancel.emit(true);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenServerNames.includes(control.value)) {
      return {'forbiddenName': true};
    }

    return null;
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
      console.log('.touched', this.name.touched);
      console.log('.dirty', this.name.dirty);
      console.log('.valid', this.name.valid);
      console.log('.errors', this.name.errors);
    console.groupEnd();

    console.group('control id');
      console.log('.touched', this.id.touched);
      console.log('.dirty', this.id.dirty);
      console.log('.valid', this.id.valid);
      console.log('.errors', this.id.errors);
    console.groupEnd();
  }
}
