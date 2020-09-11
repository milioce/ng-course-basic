import { Server } from '../server.model';

export class ServersService {

  servers: Server[] = [
    new Server('Production', 0, 'stable', 'medium'),
    new Server('User database MySQL master', 1, 'stable', 'large'),
    new Server('Stage', 2, 'failed', 'small'),
    new Server('Development', 3, 'initializing', 'small')
  ];

  constructor() {}

  addServer(server: Server) {
    this.servers.push(server);
  }

  changeStatus(server: Server) {
    const status = server.status === 'stable' ? 'failed' : 'stable';
    this.servers[server.id].status = status;
  }

  logNewServer(server: Server) {
    console.log(server);
  }
}
