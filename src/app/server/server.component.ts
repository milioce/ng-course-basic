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
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small')
  ];

  constructor() {
  }

  onCreateServer() {
    const server = new Server(this.serverName, this.servers.length, 'stable', 'medium');
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
