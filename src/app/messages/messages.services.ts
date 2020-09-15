import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessagesService {
  private source = new BehaviorSubject<string>('Message from service');
  public message$ = this.source.asObservable();

  constructor() { }

  sendData(message: string) {
    console.log('sendData to observers', message);
    this.source.next(message);
  }
}
