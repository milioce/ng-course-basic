import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverName = '';
  servers = ['Server A', 'Server B', 'Server C', 'Server D'];

  constructor() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
  }

}
