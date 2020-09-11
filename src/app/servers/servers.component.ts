import { Component } from '@angular/core';
import { Server } from './server.model';
import { ServersService } from './services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css'],
})

export class ServersComponent {
  serverName = '';
  servers: Server[];

  constructor(private service: ServersService) {
    this.servers = service.servers;
  }

  onCreateServer(serverName: string) {
    const server = new Server(serverName, this.servers.length, 'stable', 'medium');
    this.service.addServer(server);
    this.service.logNewServer(server);
  }

  changeServerStatus(server: Server) {
    // this.service.changeStatus(server);
  }

}
