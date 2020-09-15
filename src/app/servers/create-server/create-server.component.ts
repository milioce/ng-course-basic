import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl(null),
      id: new FormControl(null),
      status: new FormControl('Online'),
      instanceType: new FormControl('small')
    });
  }

  onSubmit() {
    console.log('form.value', this.form.value);
  }

  onCancel() {
    this.cancel.emit(true);
  }
}
