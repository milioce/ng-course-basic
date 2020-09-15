import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-server-td',
  templateUrl: './create-server-td.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerTdComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onDebug(form: NgForm) {
    console.log('Form', form);
    console.log('form value', form.value);
    console.log('form touched', form.touched);
    console.log('form valid', form.valid);
    console.log('form errors', form.errors);

    console.log('form Name touched', form.controls.name.touched);
    console.log('form Name dirty', form.controls.name.dirty);
    console.log('form Name valid', form.controls.name.valid);
    console.log('form Name errors', form.controls.name.errors);
  }

}
