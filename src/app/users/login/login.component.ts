import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged: boolean;

  constructor(public service: LoginService) { }

  ngOnInit(): void {
    this.service.logged$.subscribe(logged => this.logged = logged);
  }

  onLogin() {
    this.service.logged$.next(true);
  }

}
