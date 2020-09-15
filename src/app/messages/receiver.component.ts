import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.services';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent implements OnInit {
  message$: Observable<string>;

  constructor(private service: MessagesService) {
    this.message$ = this.service.message$;
  }

  ngOnInit(): void {
    /*
    this.service.message$.subscribe(message => {
      this.message = message;
    });
    */
  }

}
