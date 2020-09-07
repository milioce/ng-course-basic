import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverName = '';
  allowNewServer = false;
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }

}
