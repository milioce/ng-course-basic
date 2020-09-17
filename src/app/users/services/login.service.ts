import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {
  logged$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  isLogged() {
    return this.logged$.getValue();
  }

}
