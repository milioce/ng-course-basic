import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css']
})

export class ServersComponent {
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database MySQL master', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small')
  ];

  constructor() {
  }

  onCreateServer() {
    const server = new Server(this.serverName, this.servers.length, 'stable', 'medium');
    this.servers.push(server);
  }

}
