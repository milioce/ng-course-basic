import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
}
