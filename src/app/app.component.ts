import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './users/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-course';
  showReceiver = false;
  logged = false;

  constructor(public service: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.service.logged$.subscribe(logged => this.logged = logged);
  }

  onLogout() {
    this.service.logged$.next(false);
    this.router.navigateByUrl('/');
  }
}
