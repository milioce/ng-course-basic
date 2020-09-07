import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverName = '';

  constructor() {
  }

  onUpdateServerName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }
}
