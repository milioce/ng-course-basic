import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable'),
    new Server('User database', 2, 'stable'),
    new Server('Stage', 3, 'failed'),
    new Server('Development', 4, 'initializing')
  ];

  constructor() {
  }

  onCreateServer() {
    const server = new Server(this.serverName, this.servers.length, 'stable');
    this.servers.push(server);
  }

  getStatusClass(server: Server) {
    const classes = {
      'stable': 'badge-success',
      'failed': 'badge-danger',
      'initializing': 'badge-warning'
    }

    return classes[server.status];
  }

}
