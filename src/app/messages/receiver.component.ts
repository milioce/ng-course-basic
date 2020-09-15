import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.services';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent implements OnInit {
  message: string;

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    this.service.message$.subscribe(message => {
      this.message = message;
    });
  }

}
