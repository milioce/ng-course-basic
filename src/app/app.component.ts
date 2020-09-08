import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-course';
  user: User;
  users: User[];

  constructor() {
    const user: User = {
      id: 1,
      name: 'Test',
      sayHello() {
        console.log('Hello!')
      }
    }
    user.sayHello();
  }
}
