import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';
import { ServersService } from './services/servers.service';

@Component({
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css'],
})

export class ServersComponent implements OnInit {
  servers: Server[];
  displayForm = false;

  constructor(private service: ServersService) {
    // this.servers = service.servers;
  }

  ngOnInit() {
    this.loadServers();
  }

  onCreateServer(server: Server) {
    // console.log('onCreateServer');
    this.service.addServer(server).subscribe(data => {
      this.displayForm = false;
      this.loadServers();
    });
  }

  private loadServers() {
    this.service.getServers().subscribe(servers => {
      this.servers = servers.map(
        server => this.transformServer(server)
      );
    });
  }

  private transformServer(server): Server {
    return new Server(server.name, server.id, server.status, server.instanceType);
  }

}
