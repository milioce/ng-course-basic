import { Component } from '@angular/core';
import { Server } from './server.model';
import { ServersService } from './services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css'],
  providers: [ServersService]
})

export class ServersComponent {
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database MySQL master', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small')
  ];

  constructor(private service: ServersService) {
  }

  onCreateServer(serverName: string) {
    const server = new Server(serverName, this.servers.length, 'stable', 'medium');
    this.servers.push(server);
    this.service.logNewServer(server);
  }

  changeServerStatus(server: Server) {
    const status = server.status === 'stable' ? 'failed' : 'stable';
    this.servers[server.id - 1].status = status;
  }

}
