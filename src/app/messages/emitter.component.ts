import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.services';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
})
export class EmitterComponent implements OnInit {
  msg = '';

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.service.sendData(this.msg);
  }

}
