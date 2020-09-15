import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessagesService {
  private source = new BehaviorSubject<string>('Message from service');
  public message$ = this.source.asObservable();

  constructor() { }

  sendData(message: string) {
    this.source.next(message);
  }
}
