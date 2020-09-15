import { Injectable } from '@angular/core';
import { Server } from '../server.model';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class ServersService {
  servers: Server[] = [
    new Server('Production', 0, 'Online', 'medium'),
    new Server('User database MySQL master', 1, 'Online', 'large'),
    new Server('Stage', 2, 'Offline', 'small'),
    new Server('Development', 3, 'Offline', 'small')
  ];

  constructor(private logger: LoggerService) {}

  addServer(server: Server) {
    this.servers.push(server);
  }

  changeStatus(server: Server) {
    const status = server.status === 'Online' ? 'Offline' : 'Online';
    const index = this.servers.findIndex(item => item.id === server.id);

    this.servers[index].status = status;
  }

  logNewServer(server: Server) {
    this.logger.logData(server);
  }
}
