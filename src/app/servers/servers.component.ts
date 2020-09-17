import { Component } from '@angular/core';
import { Server } from './server.model';
import { ServersService } from './services/servers.service';

@Component({
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css'],
})

export class ServersComponent {
  servers: Server[];
  displayForm = false;

  constructor(private service: ServersService) {
    this.servers = service.servers;
  }

  onCreateServer(server: Server) {
    this.service.addServer(server);
    this.displayForm = false;
  }

}
